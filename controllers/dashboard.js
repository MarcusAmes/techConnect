const knex = require("../db/knex.js");

module.exports = {
  admin: (req, res) => {
    user = req.session.user
    knex('users').then((results) => {
      let users = {};
      for (let i = 0; i < results.length; i++) {
        if (user.id != results[i].id) {
          users[results[i].id] = results[i];
          users[results[i].id].commonInterests = [];
        }
      }
      knex('interests').where('user_id', user.id).then((userInterests) => {
        knex('interests').then((usersInterests) => {
          let scores = {}
          for (let ind = 0; ind < usersInterests.length; ind++) {
            if(usersInterests[ind]['user_id'] != user.id) {
              scores[usersInterests[ind].user_id] = 0;
              for (let x = 0; x < userInterests.length; x++) {
                if (usersInterests[ind].interest.toUpperCase() === userInterests[x].interest.toUpperCase()) {
                  scores[usersInterests[ind]['user_id']] += 1;
                  users[usersInterests[ind]['user_id']].commonInterests.push(usersInterests[ind].interest)
                }
              }
            }
          }
          let sort = [];
          for (let key in scores) {
              sort.push([key, scores[key]]);
          }

          sort.sort(function(a, b) {
              return b[1] - a[1];
          })

          orderedUsers = []
          for (let order = 0; order < sort.length; order++) {
            for (let idx in users) {
              if(users[idx].id == sort[order][0]) {
                orderedUsers.push(users[idx])
              }
            }
          }

          res.render('dashboard', {user: user, users: orderedUsers})
        })
      })


    })


  }
}
