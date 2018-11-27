const knex = require("../db/knex.js");

module.exports = {
    index: (req, res) => {
        knex("users").where("id", req.params.id).then((results) =>{
            res.render("user_two_profile", {users: results[0]})
        })
    }
}