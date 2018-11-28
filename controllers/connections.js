const knex = require("../db/knex.js");

module.exports = {
  yes: (req, res) =>{
    knex('connections').where('match_two_user_id', req.session.user.id).then((second) => {
      if (second.length >= 1) {
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
      req.session.nonConnections.push(Number(req.params.id))
    } else {
      req.session.nonConnections = [Number(req.params.id)]
    }
    res.redirect('/dashboard')
  },
  matches: (req, res) => {
    let user = req.session.user;
    let confirmedMatches = [];
    knex('connections').join('users', 'connections.match_two_user_id', 'users.id').where('match_one_user_id', user.id).then((matches) => {
      for ( let i = 0; i < matches.length; i++) {
        if (matches[i].connected){
          confirmedMatches.push(matches[i]);
        }
      }
      knex('connections').join('users', 'connections.match_one_user_id', 'users.id').where('match_two_user_id', user.id).then((matches2) => {
        for ( let i = 0; i < matches2.length; i++) {
          if (matches2[i].connected){
            confirmedMatches.push(matches2[i]);
          }
        }
        res.render('matches', {user: user, confirmedMatches: confirmedMatches});
      })
    })
  }
}
