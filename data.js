var employee = [];

//funzione che utilizzo per mappare i dati in un oggetto di tipo operaio
function mapEmployees(id,nome,cognome,livello,salario){
    var impiegato ={
        id : id,
        name : nome,
        surname : cognome,
        level : livello,
        salary: salario
    }
    employee.push(impiegato);
}

exports.getEmployees = function getEmployees(){
    return employee;
}

mapEmployees(0,"Marco","Roberti",10,5);
mapEmployees(1,"Marco","Roberti",10,5);

console.log(employee.length);
