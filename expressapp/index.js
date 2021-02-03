const express = require("express");
const bodyParser  = require("body-parser");
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json()) 
app.use(cors())


var fictionalUser = { login: "login", password: "password"};

const JWT_Secret = 'pretty_secret_key';

app.post("/auth", (req, res) => {
  
  if (req.body) {

    var authUser = req.body;
    
    if (fictionalUser.login == req.body.login && fictionalUser.password == req.body.password) {
      
      var token = jwt.sign(authUser, JWT_Secret);
      
      res.status(200)
      .send({
        signedUser: authUser,
        token: token

      });

    } else {

      res.status(403).send({
        errorMessage: "Authorisation required!"

      });
    }
  } else {

      res.status(403).send({
      errorMessage: "Please enter your login and password!"

    });
  }
  
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');

});
  
app.listen(3000, () => {
  console.log("Try on port 3000")
});


