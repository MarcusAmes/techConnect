//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
module.exports = function(app){

  //LOGIN AND REGISTER
  app.get('/', login.index);
  app.get('/login', login.login_page);
  app.get('/register', login.register_page);
  app.post('/login', login.login);
  app.post('/register', login.register);
/*
app.use(authMiddleware);

}

function authMiddleware (req, res, next){
  if(!req.session.user_id){
      res.redirect('/');
  }
      else{
          next();
         
      }
  }
  */
}