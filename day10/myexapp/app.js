var express = require('express');
var app = express();

app.get('/', function(req, res){
	console.log("This is here!");
	res.send('Hello World!');
});

app.listen(3000,function (){
	console.log("Example app listening on 3000...")
});