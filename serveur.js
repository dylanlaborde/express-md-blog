var express = require('express');
var app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/public/index.html', function (req, res) {
  res.send('/public/index.html');
 
  
});

app.listen(1337, function () {
  console.log('app listening on port 1337!');
});
 
app.use(express.static('public'));