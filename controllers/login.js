const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: (req, res) => {
    res.render("index");
  },
  login_page: (req, res) => {
    res.render("login");
  },
  register_page: (req, res) => {
    res.render("register");
  },
  create_profile_page: (req, res) => {
    res.render("createProfile", {user_id: req.params.id});
  },
  login: (req, res) => {
    knex('users').where('username', req.body.log_username).then((results) => {
      if (results.length >= 1) {
        let user = results[0]
        if(user.password === req.body.log_password) {
          req.session.user = user;
          req.session.nonConnections = [];
          req.session.save(()=>{
            res.redirect('/dashboard');
          })
        } else {
          res.redirect('/login');
        }
      } else {
        res.redirect('/login');
      }
    })
  },
  register: (req, res) => {
    if (req.body.reg_password === req.body.reg_cPassword) {
      knex('users').insert({
        email: req.body.reg_email,
        password: req.body.reg_password,
      }, '*').then((results)=>{
        res.redirect(`/createprofile/${results[0].id}`)
      })
    } else {
      res.redirect('/register')
    }
  },
  update: (req, res) => {
    knex('users').update(req.body).where('id', req.params.id).then(() => {
      knex('users').where('id', req.params.id).then((results) => {
        req.session.user = results[0];
        req.session.nonConnections = [];
        req.session.save(()=>{
          res.redirect('/dashboard');
        })
      })
    })
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/')
  }
}
