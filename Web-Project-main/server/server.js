const express = require('express');
const path = require('path');
const bodyparser=require("body-parser");
const favicon = require('serve-favicon');
const session = require("express-session");
const http = require('http');
const {v4:uuidv4} =require("uuid");
const app=express();
const WebSocket = require('ws');
const port = process.env.PORT || 3000;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.use('/static',express.static(path.join(__dirname,'public')));
app.use(session({
  secret:uuidv4(),
  resave:false,
  saveUninitialized:true
  //default
}));

app.post('/login',(req,res)=>{
 
  console.log("Login request recieved");
let Username = req.body.username;
let Password = req.body.password;
//search database

let userID= '1';
var responseData = {
  'userID' : userID
  
};

res.setHeader('Content-Type', 'application/json');
res.status(200);
res.json(responseData);
});

const faviconPath = path.join(__dirname, 'public', 'images.ico');
//icon path

app.use(favicon(faviconPath));
app.get('/',(req,res)=>{

  res.render('login');
});

app.get('/SignUp',(req,res)=>{
  res.render('signup');
});

app.get('/about',(req,res)=>{
  res.render('about page');
});

app.get('/Home',(req,res)=>{
  res.render('Home');
});


app.get('/CustomerService',(req,res)=>{
  
  res.render('CustomerService');
});
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

server.listen(port, ()=>{
  console.log("Listening to server on http://localhost:3000");
});

wss.on('open', (ws) => {
  console.log('Realtime communication established');
  //adding some functions later
});


app.post('/createAccount',(req,res)=>{
 
  console.log("Sign UP request recieved");

//search database for similarities if nothing found add the account

});
