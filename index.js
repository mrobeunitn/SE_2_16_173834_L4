
var express = require('express');
//inspect
var util = require('util');
var bind = require('bind');
var path  = require('path');

//instantiate express
var app = express();
var scripts = require('./scripts.js');
var datajs = require("./data.js");

//POST
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
//JSON post
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 1337));
//mi creo un id per fare la ricerca
var id;
app.set('port', (process.env.PORT || 5000));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) 
{
    bind.toFile('index.tpl', 
	{
        
    }, 
    function(data) 
    {
        //write response
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
});
    //text = "lel";
	//response.writeHead(200, {'Content-Type': 'text/html'});
   // response.end(text);

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
    var userId = req.body.ids;
    console.log("index"+userId);
    var employees = datajs.getEmployees();
    console.log(employees[1]);
    var pos = scripts.searchId(userId) ;
    console.log("script ok");
    var emp = {"id": "-1", "name": "Non esiste", "surname": "Non esiste", "level":"-1", "salary": "-1"};
    if(pos != -1){
        emp = employees[pos];
    }
    else{
      /*  emp.id = null;
        emp.name = null;
        emp.surname = null;
        emp.level = null;
        emp.salary = null;*/
        console.log(emp);
        
    }
    bind.toFile('index.tpl',emp, 
    function(data) 
    {
        //write response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });	
   //inserisc
    /*text = "lel";
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(text);*/ //console.log(util.inspect(req.body));//mapEmployees(request.body.id,request.body.name,request.body.surname,request.body.level,request.body.salary);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

