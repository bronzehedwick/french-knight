var express = require('express'),
path = require('path');

//create our express app
var app = express();

app.use(express.static(__dirname + '/public'));

//have our app listen on port 3000
app.listen(3000);
console.log('Your app is now running at: http://127.0.0.1:3000/');
