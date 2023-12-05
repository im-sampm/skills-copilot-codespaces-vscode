// Create web server 
// Run: node comments.js
// Test: curl http://localhost:3000/comments
// Test: curl -X POST -H "Content-Type: application/json" -d '{"body": "Hello", "postId": 1}' http://localhost:3000/comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var COMMENTS_FILE = __dirname + '/comments.json';

// Enable CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow access from any origin
    res.setHeader('Cache-Control', 'no-cache'); // Disable caching
    next();
});

// Serve static assets from the public folder
app.use('/', express.static(__dirname + '/public'));

// Enable parsing of application/json
app.use(bodyParser.json());
// Enable parsing of application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
