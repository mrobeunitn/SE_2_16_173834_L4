

function resetLabels(){
    document.getElementById("idlabel").innerHTML = ""; document.getElementById("namelabel").innerHTML = "";
    document.getElementById("surnamelabel").innerHTML = "";
    document.getElementById("levellabel").innerHTML = "";
    document.getElementById("salarylabel").innerHTML = "";
}
//funzione che utilizzo per mostrare o nascondere il form 
function visualizzaForm(){
     document.getElementById("formAdd").reset();
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
    document.getElementById("vis").innerHTML = "See Add/Delete Form";
}

function showForm(){
    document.getElementById("formAdd").style.display= 'block';
    document.getElementById("vis").innerHTML = "Hide Add/Delete form";
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
    var data = {};
    for (var i = 0; i < form.length; ++i) {
        var input = form[i];
        if (input.name) {
            data[input.name] = input.value;
        }
    }
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

function sendDeleteForm(){
    //get the form object
    var form= document.getElementById("deleteForm");
    // collect the form data while iterating over the inputs
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