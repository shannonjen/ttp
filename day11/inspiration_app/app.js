var express = require('express');
var exphbs  = require('express-handlebars');
var bodyp = require('body-parser');
var app = express();
var quotes = ["You are inspired when you find inspiration", "If you seek inspiration, look for it", "I am always inspired by inspirational quotes"];

//notice the option object uses extended not extend
app.use(bodyp.urlencoded({extended:true}));

//declare location for static assets
app.use(express.static('public'));

//handlebars template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//passes in an empty string for username local variable
//see home view
app.get('/', function (req, res) {
  res.render('home', { username: ""});
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/inspiration', function (req, res) {
	var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
	res.render('inspiration', { inspirational: randomQuote });
  
});

app.get('/login', function (req, res) {
	var username = req.query.username;
	var password = req.query.password;
	console.log(req.query.username);
	console.log(req.query.password);
	res.render('home', { username: username });
})

app.post('/', function (req, res){
	console.log("Hello this is a post request");
	console.log("username: "+ req.body.username);
	res.render('home');
});

app.listen(3000, function () {
  console.log('Inspiration app listening on port 3000!');
});