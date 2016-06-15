var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
var quotes = ["You are inspired when you find inspiration", "If you seek inspiration, look for it", "I am always inspired by inspirational quotes"];

app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});
app.get('/about', function (req, res) {
  res.render('about');
});
app.get('/inspiration', function (req, res) {
	var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
	res.render('inspiration', { inspirational: randomQuote });
  
});
// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(3000, function () {
  console.log('Inspiration app listening on port 3000!');
});