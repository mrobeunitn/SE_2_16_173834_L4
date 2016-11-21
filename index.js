
//express lib
var express = require('express');
//general lib
var app = express();
//my data.js file
var datajs = require("./data.js");
var htmlfunctions = require("./functions.js");
//mi creo un id per fare la ricerca
var id;
app.set('port', (process.env.PORT || 5000));

app.use('/', function(request, response) 
{
   id = request.body.ids; mapEmployees(request.body.id,request.body.name,request.body.surname,request.body.level,request.body.salary);
	response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(text);
  	
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

