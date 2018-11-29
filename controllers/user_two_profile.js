const knex = require("../db/knex.js");

module.exports = {
    index: (req, res) => {
        knex("users").where("id", req.params.id).then((results) =>{
            knex('interests').where('user_id', req.params.id).then((interests) => {
              res.render("user_two_profile", {user: req.session.user, users: results[0], interests: interests})
            })
        })
    }
}
