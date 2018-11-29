const knex = require("../db/knex.js");
const hasher = require("../config/hasher.js");

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
    knex('users').where('username', req.body.username).then((results) => {
      if (results.length >= 1) {
        let user = results[0]
        hasher.check(user, req.body).then((isMatch) => {
          if(isMatch) {
            req.session.user = user;
            req.session.nonConnections = [];
            req.session.save(()=>{
              res.redirect('/dashboard');
            })
          } else {
            res.redirect('/login');
          }
        })
      } else {
        res.redirect('/login');
      }
    })
  },
  register: (req, res) => {
    if (req.body.password === req.body.cPassword) {
      hasher.hash(req.body).then((user) => {
        knex('users').insert({
          email: user.email,
          password: user.password,
        }, '*').then((results)=>{
          res.redirect(`/createprofile/${results[0].id}`)
        })
      })
    } else {
      res.redirect('/register')
    }
  },
  update: (req, res) => {
    knex('users').update(req.body).where('id', req.params.id).then(() => {
      knex('users').where('id', req.params.id).then((results) => {
        req.session.user = results[0];
        req.session.save(()=>{
          if(req.session.nonConnections) {
            res.redirect('/dashboard');
          } else {
            req.session.nonConnections = [];
            res.redirect('/interests')
          }
        })
      })
    })
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/')
  }
}
