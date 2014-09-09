
var express  = require('express');
var app      = express(); 								
var mongoose = require('mongoose'); 					
var port  	 = process.env.PORT || 8080; 				
var database = require('./config/database'); 			
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect(database.url); 	

var directory = __dirname + '/public';

app.use(express.static(directory)); 		
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended':'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride('X-HTTP-Method-Override')); 

app.get('/slides', function (req, res) {
  res.sendfile(directory + '/slides.html');
});

require('./app/routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
console.log("Connected to Database " + database.url);