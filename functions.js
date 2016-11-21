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


function searchId(var id){
    
    
}