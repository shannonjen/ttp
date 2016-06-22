//var express = require('express');

var app = (require('express'))();
var bodyp = require('body-parser');

app.use(bodyp.urlencoded({extended:true}));



// function(){
// 	require('express')();
// }

app.get("/",function(req,res){
	res.send("Hi mom!");
});

app.get("/messages", function(req,res){
	res.send(req.query);
});

app.post('/messages', function(req,res){
	res.send(req.body.message_1);
});

app.listen(3000, function(){
	console.log("You are listening to port 3000");
});