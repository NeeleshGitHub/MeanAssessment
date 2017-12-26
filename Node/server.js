require('./model/model');
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
mongoose.Promise = require('bluebird');   // To remove deprecation warning node 6676
 var cors = require('cors'); // To allow Cross-Origin Restrictions
 var jwt  = require("jsonwebtoken");

mongoose.connect('mongodb://localhost:27017/node', { useMongoClient: true });

var app = module.exports = express();



// process.env.SECRET_KEY = "mysecretkey";

var NODE_ENV = 'development';
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 app.use(cors());

// app.get("/api/authenticate");
routes = require('./routes/routes')
app.use('/api', routes);

var port = process.env.PORT || 8888;

app.listen(port);

console.log('Server starts on port ' + port);
