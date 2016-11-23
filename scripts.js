 
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
    //flag trovato che uso per gstire il while
    var trovato = false;
    var id;
    var employee = data.getEmployees();
    console.log("ID EMPLOYEE PRIMA DI ENTRARE NEL WHILE: "+emp.id);
    //se id è nullo inserisco in automatico
    if(emp.id == ""){
        
        while(i < employee.length && trovato == false){
            //in questo caso faccio delle assunzioni: utilizzo i numeri interi come id, quindi controllo se tra tra due impiegati in posizione i e i+1 c'è una differenza > 1, in questo caso vuol dire che in quelll'intervallo ci sono ids disponibili. Sono sicuro che sia univoco perchè ordino gli impiegati per id crescente, quindi sarà sempre univoco.
            console.log("DIfferenze: "+employee[i].id+"   i   "+i);
             if(employee[i].id != i ){
                 console.log("sto inserendo l'id "+i)
                 id = i;
                 trovato = true;
             }
            /*
           
            if( (employee[i+1].id-employee[i].id) > 1  ){
                trovato = true;
                id = i+1;
            }*/
            i++;
        }
        //se sono tutti occupati quelli intermedi, do il successivo dell'ultimo
        if(trovato == false){
            id = employee.length;
        }
        console.log("ID DI DEFAULT ---> "+id);
        emp.id = id;
    }
    
    //vedo se c'è già un altro impiegato con un deterinato id e se c'è trasacrivo
    i =0;
    trovato = false;
    while(i < employee.length && trovato == false){
        if (employee[i].id == emp.id){
            trovato = true;
            employee[i] = emp;
        }
        i++;
    }
    //se non trovo una posizione utile (un id libero) ritrono i = -1
    if(trovato == false)
        
        data.addEmployee(emp);
}


//funzione per cancellare un empl

exports.deleteEmployee = function deleteEmployee(id){
    //chiamo la funzione search id per trovare chi eliminare 
    var id_emp = this.searchId(id);
    var employee = data.getEmployees();
    //utilizzando la funzione degli array elimino l'elemento desiderato.
    if(id_emp != -1)
        employee.splice(id_emp,1);
}