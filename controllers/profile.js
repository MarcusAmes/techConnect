const knex = require("../db/knex.js");

module.exports = {
  view: (req, res) => {
    res.render('profile', {user: req.session.user})
  },

  edit: (req, res) => {
    knex('users').update(req.body).where('id', req.params.id).then(() => {
      knex('users').where('id', req.params.id).then((results) => {
        req.session.user = results[0];
        req.session.save(()=>{
          res.redirect('/profile');
        })
      })
    })
  },

}
