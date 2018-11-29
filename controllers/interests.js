const knex = require("../db/knex.js");

module.exports = {
    index: (req, res) =>{
        res.render("interests")
    },
    add: (req, res) =>{
      let { cInterest, interests } = req.body;
      for(let i = 0; i < interests.length; i++) {
        knex('interests').insert({
          user_id: req.session.user.id,
          interest: interests[i],
        }).then(() => {})
      }
      if(cInterest.length >= 1){
        knex('interests').insert({
          user_id: req.session.user.id,
          interest: cInterest,
        }).then(() => {
          res.redirect('/dashboard')
        })
      } else {
        res.redirect('/dashboard')
      }
    }


}
