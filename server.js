

// Node Dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var logger = require('morgan'); // for debugging
var request = require('request'); // for web-scraping
var cheerio = require('cheerio'); // for web-scraping


// Initialize Express for debugging & body parsing
var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}))

// Serve Static Content
app.use(express.static(process.cwd() + '/public'));

// Express-Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Database Configuration with Mongoose
// ---------------------------------------------------------------------------------------------------------------
// Connect to localhost if not a production environment
// if(process.env.NODE_ENV == 'production'){
//   mongoose.connect('mongodb://heroku_60zpcwg0:ubn0n27pi2856flqoedo9glvh8@ds119578.mlab.com:19578/heroku_60zpcwg0');
// }
// else{
//   mongoose.connect('mongodb://localhost/tubeScraper');

// }

// If deployed, use the deployed database. Otherwise use the local tubeScraper database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tubeScraper";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


var db = mongoose.connection;

// Show any Mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Import the Comment and Article models
var Comment = require('./models/Comment.js');
var Article = require('./models/Article.js');
// ---------------------------------------------------------------------------------------------------------------

// DROP DATABASE (FOR MY PERSONAL REFERENCE ONLY - YOU CAN IGNORE)
// Article.remove({}, function(err) { 
//    console.log('collection removed') 
// });

// Import Routes/Controller
var router = require('./controllers/controller.js');
app.use('/', router);


// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});
