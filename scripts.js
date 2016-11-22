 
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

//funzione per inserire un nuovo elemento

exports.insertEmployee = function insertEmployee(emp){
    var i =0;
    var trovato = false;
    var id;
    var employee = data.getEmployees();
    console.log("ID EMPLOYEE PRIMA DI ENTRARE NEL WHILE: "+emp.id);
    //se id è nullo inserisco in automatico
    if(emp.id == ""){
        
        while(i < employee.length-1 && trovato == false){
            //in questo caso faccio delle assunzioni: utilizzo i numeri interi come id, quindi controllo se tra tra due impiegati in posizione i e i+1 c'è una differenza > 1, in questo caso vuol dire che in quelll'intervallo ci sono ids disponibili. Sono sicuro che sia univoco perchè ordino gli impiegati per id crescente, quindi sarà sempre univoco.
            if( (employee[i+1].id-employee[i].id) > 1  ){
                trovato = true;
                id = i+1;
            }
            i++;
        }
        //se sono tutti occupati quelli intermedi, do il successivo dell'ultimo
        if(trovato == false){
            id = i+1;
        }
        console.log("ID DI DEFAULT ---> "+id);
        emp.id = id;
    }
    
    //se non trovo una posizione utile (un id libero) ritrono i = -1
    data.addEmployee(emp);
}
