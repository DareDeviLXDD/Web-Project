const express = require('express');
const path = require('path');
const bodyparser=require("body-parser");
const favicon = require('serve-favicon');
const session = require("express-session");
const http = require('http');
const {v4:uuidv4} =require("uuid");
const app=express();
const WebSocket = require('ws');
const port = process.env.PORT || 8080;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
const domainName = 'qjv19z68-8080.euw.devtunnels.ms';
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

  res.render('login', { domainName: domainName });
});

app.get('/SignUp',(req,res)=>{
  res.render('signup');
});

app.get('/about',(req,res)=>{
  res.render('about page');
});

app.get('/Home',(req,res)=>{
  res.render('Home', { domainName: domainName });
});
app.get('/HomeP',(req,res)=>{
  res.render('HomeP',{ domainName: domainName });
});
app.get('/HomeR',(req,res)=>{
  res.render('HomeR', { domainName: domainName });
});
app.get('/HomeT',(req,res)=>{
  res.render('HomeT', { domainName: domainName });
});

app.get('/CustomerService',(req,res)=>{
  
  res.render('CustomerService');
});

app.get('/AdminOrder',(req,res)=>{
  
  res.render('AdminOrder');
});

app.get('/1stShoes',(req,res)=>{
  
  res.render('1stShoes', { domainName: domainName });
});

app.get('/account',(req,res)=>{
  
  res.render('account', { domainName: domainName });
});

app.get('/Admin',(req,res)=>{
  
  res.render('Admin', { domainName: domainName });
});

app.get('/AdminU',(req,res)=>{
  
  res.render('AdminU', { domainName: domainName });
});

app.get('/change_address',(req,res)=>{
  
  res.render('change_address', { domainName: domainName });
});

app.get('/clogs',(req,res)=>{
  
  res.render('clogs', { domainName: domainName });
});

app.get('/flats',(req,res)=>{
  
  res.render('flats', { domainName: domainName });
});

app.get('/mules',(req,res)=>{
  
  res.render('mules', { domainName: domainName });
});

app.get('/NewArrivals',(req,res)=>{
  
  res.render('New Arrivals', { domainName: domainName });
});

app.get('/NewArrivalPage2',(req,res)=>{
  
  res.render('NewArrivalPage2', { domainName: domainName });
});

app.get('/sandals',(req,res)=>{
  
  res.render('sandals', { domainName: domainName });
});

app.get('/shoes',(req,res)=>{
  
  res.render('shoes', { domainName: domainName });
});

app.get('/shop',(req,res)=>{
  
  res.render('shop', { domainName: domainName });
});

app.get('/SummerSlippers',(req,res)=>{
  
  res.render('SummerSlippers', { domainName: domainName });
});


const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

server.listen(port, ()=>{
  console.log("Listening to server on http://localhost:8080");
});

wss.on('open', (ws) => {
  console.log('Realtime communication established');
  //adding some functions later
});


app.post('/createAccount',(req,res)=>{
 
  console.log("Sign UP request recieved");

//search database for similarities if nothing found add the account

});
