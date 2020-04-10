var express = require("express");
var app = express();
var abc = require('./route.js');
var swaggerUI = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');


app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
var kat  = {id:"1",name:"vuong gia vlk" }; 
app.get('/',function(req,res){
  res.send('kata');
});
app.get('/api',function(req,res){
    res.send(kat);
  });
app.use('/',abc);
app.listen(3001, function(){
  console.log("vui");
});