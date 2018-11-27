//Update the name of the controller below and rename the file.
const login = require("../controllers/login.js");
const profile = require("../controllers/profile.js");
module.exports = function(app){

  //LOGIN AND REGISTER
  app.get('/', login.index);
  app.get('/login', login.login_page);
  app.get('/register', login.register_page);
  app.post('/login', login.login);
  app.post('/register', login.register);
  app.post('/update/:id', login.update);

  app.use(authMiddleware);

  app.get('/dashboard', profile.admin)

}

function authMiddleware (req, res, next){
  if(!req.session.user){
    res.redirect('/');
  }
    else{
      next();
    }
  }
