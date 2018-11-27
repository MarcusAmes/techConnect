const knex = require("../db/knex.js");

module.exports = {
  yes: (req, res) =>{
    knex('connections').where('match_two_user_id', req.session.user.id).then((second) => {
      if (second.length >= 1) {
        console.log(second);
        for(let i = 0; i < second.length; i++) {
          if(second[i]['match_one_user_id'] == req.params.id) {
            knex('connections').update({connected: true}).where('id', second[i].id).then(() => {
              res.redirect('/dashboard')
              return;
            })
          } else {
            knex('connections').insert({
              match_one_user_id: req.session.user.id,
              match_two_user_id: req.params.id
            }).then(() => {
              res.redirect('/dashboard')
            })
          }
        }
      } else {
        knex('connections').insert({
          match_one_user_id: req.session.user.id,
          match_two_user_id: req.params.id
        }).then(() => {
          res.redirect('/dashboard')
        })
      }
    })
  },
  no: (req, res) =>{
    if (req.session.nonConnections){
      req.session.nonConnections.push(req.params.id)
    } else {
      req.session.nonConnections = [req.params.id]
    }
    console.log(req.session.nonConnections);
    res.redirect('/dashboard')
  },
}
