const knex = require("../db/knex.js");

module.exports = {
  admin: (req, res) => {
    res.render('dashboard', {user: req.session.user})
  }
}
