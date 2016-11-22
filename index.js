
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

//post per inserimento

app.post('/inserimento', function(req,res){
    //qui cerco e inserisco nel form
     id = request.body.ids;
     var pos = searchId(id);
    if(pos != -1){   
    }
});

//post per inserimento

app.post('/ricerca', function(req,res){
    //mi prendo l'id che viene cercato e poi richiamo la funzione di script che i cerca nell'array di employees se già è presente l'd cercato
    var userId = req.body.ids;
    var employees = datajs.getEmployees();
    var pos = scripts.searchId(userId) ;
    //inizializzo l'oggetto emp a 'non trovato' e '-1',perchè in caso non trovassi l'impiegato cercato setto con 'nontrovato' tutti i form nell'index
    var emp = {"id": "-1", "name": "Non esiste", "surname": "Non esiste", "level":"-1", "salary": "-1"};
    if(pos != -1){
        emp = employees[pos];
    }
    else{
        console.log(emp);
        
    }
    bind.toFile('index.tpl',emp, 
    function(data) 
    {
        //write response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });	
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

