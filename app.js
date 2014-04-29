var express = require('express'),
path = require('path');

//create our express app
var app = express();

app.use(express.static(__dirname + '/public'));

//have our app listen on port 5000
app.listen(5000);
