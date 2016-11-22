var data = require("./data.js");
//funzione che utilizzo per mostrare o nascondere il form 
function visualizzaForm(){
    if(document.getElementById("formAdd").style.display == 'none'){
        showForm();
    }
    else{
        hideForm();
    }
} 

//funzione per nascondere il form
function hideForm(){
    document.getElementById("formAdd").style.display= 'none';
    document.getElementById("vis").innerHTML = "VisualizzaForm";
}

function showForm(){
    document.getElementById("formAdd").style.display= 'block';
    document.getElementById("vis").innerHTML = "NascondiForm";
}


//funzione per cercare l'id
exports.searchId = function searchId(id){
    var employee = data.getEmployees();
    var i =0;
    var trovato = false;
    while(i < employee.length && trovato == false){
        if(employee[i].id == id){
            trovato = true;
        }
    }
    if(trovato == false){
        i = -1;
    }
    return i;
}
//funzione per la ricerca del primo id libero 
/*function searchFreePosition(){
    var i =0;
    var trovato = false;
    while(i < employee.length && trovato == false){
        if(employee[i].id == null){
            trovato = true;
        }
    }
    //se non trovo una posizione utile (un id libero) ritrono i = -1
    if(trovato == false){
        i=-1;
    }
     return i;
}

*/
//funzione di invio del form di aggiunta

function sendAddForm()
{
    //get the form object
    var form= document.getElementById("formAdd");

    // collect the form data while iterating over the inputs
    var data = {};
    for (var i = 0, ii = form.length; i < ii; ++i) {
        var input = form[i];
        if (input.name) {
            data[input.name] = input.value;
        }
    }

    console.log(data);

    // construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // send the collected data as JSON
    xhr.send(JSON.stringify(data));

    xhr.onloadend = function () 
    {
        var result=xhr.responseText;
        console.log(result);
    };
};


//funzione di invio del form di ricerca

function sendIdForm()
{
    //get the form object
    var form= document.getElementById("searchId");
    // collect the form data while iterating over the inputs
    var data = {};
    for (var i = 0, ii = form.length; i < ii; ++i) {
        var input = form[i];
        if (input.name) {
            data[input.name] = input.value;
        }
    }

    //console.log(data);

    // construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // send the collected data as JSON
    xhr.send(JSON.stringify(data));

    xhr.onloadend = function () 
    {
        var result=xhr.responseText;
        console.log(result);
    };
   // location.reload();
};