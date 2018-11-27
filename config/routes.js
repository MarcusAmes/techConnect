//Update the name of the controller below and rename the file.
const login = require("../controllers/login.js");
const profile = require("../controllers/profile.js");
const dashboard = require("../controllers/dashboard.js");
const user_two_profile = require("../controllers/user_two_profile.js");
const connections = require("../controllers/connections.js");
module.exports = function(app){

  //LOGIN AND REGISTER
  app.get('/', login.index);
  app.get('/login', login.login_page);
  app.get('/register', login.register_page);
  app.post('/login', login.login);
  app.post('/register', login.register);
  app.post('/update/:id', login.update);

  app.use(authMiddleware);

//DASHBOARD
  app.get('/dashboard', dashboard.admin);
  app.get('/no/:id', connections.no);
  app.get('/yes/:id', connections.yes);
  app.get('/logout', login.logout);
  
// USER PROFILE
app.get('/profile', profile.view)

  //USER_TWO_PROFILE
  app.get('/user_two_profile/:id', user_two_profile.index);


}

function authMiddleware (req, res, next){
  if(!req.session.user){
    res.redirect('/');
  }
    else{
      next();
    }
  }
