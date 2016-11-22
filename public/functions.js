
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


//funzione di invio del form di aggiunta

function sendAddForm()
{
    //get the form object
    var form= document.getElementById("formAdd");

    // collect the form data while iterating over the inputs
    var data = {};
    for (var i = 0; i < form.length; ++i) {
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

function sendIdForm(){
    //get the form object
    var form= document.getElementById("searchId");
    // collect the form data while iterating over the inputs
    alert(form);
    var data = {};
    for (var i = 0; i < form.length; ++i) {
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
};