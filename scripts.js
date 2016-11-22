 
var data = require("./data.js");
//funzione per cercare l'id
exports.searchId = function searchId(id){
    var employee = data.getEmployees();
    var i =0;
    var trovato = false;
    //ciclo su employee finche non ho trovato l'elemento oppure supero la dimensione massima dell'array
    while(i < employee.length && trovato == false){
        if(employee[i].id == id){
            trovato = true;
        }
        else{
            i++;
        }
    }
    //se non la trovo ritorno i = -1
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