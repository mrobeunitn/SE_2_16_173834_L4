
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

var datajs = require("./data.js");
var scripts = require("./functions.js");
//POST
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
//JSON post
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 1337));
//mi creo un id per fare la ricerca
var id;
app.set('port', (process.env.PORT || 5000));

/*app.use('/', function(request, response) 
{
    text = "lel";
	response.writeHead(200, {'Content-Type': 'text/html'});
   // response.end(text);	
});

//post per ricerca
/*
app.post('/ricerca', function(req,res){
    //qui cerco e inserisco nel form
     id = request.body.ids;
     var pos = searchId(id);
    if(pos != -1){   
    }
});*/

//post per inserimento

app.post('/ricerca', function(req,res){
    var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //for cross enviroment request
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    //answer
    headers["Content-Type"] = "application/json";//format response
    res.writeHead(200, headers);
    
    var userId = req.body.ids;
    var employees = datajs.getEmployees();
    var pos = scripts.searchId(userId) ;
    scripts.searchId(userId);
    if(pos != -1){
        var emp = employees[pos];
        var json = JSON.stringify({ 
    	 "employee" :emp
        });
    }
    text = req.body.ids;
    res.end(json);	
    
   //inserisc
    /*text = "lel";
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(text);*/ console.log(util.inspect(req.body));//mapEmployees(request.body.id,request.body.name,request.body.surname,request.body.level,request.body.salary);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

