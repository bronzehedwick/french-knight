var express = require('express'),
path = require('path');

//create our express app
var app = express();

app.use(express.static(__dirname + '/public'));

//have our app listen on port 3000
app.listen(process.env.PORT || 3000, function(){
  'use strict';
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
