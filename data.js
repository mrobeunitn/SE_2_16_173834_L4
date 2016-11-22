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

exports.addEmployee = function addEmployee(emp){
    //inserisco e poi ordino 
    employee.push(emp);
    employee.sort(function(emp1,emp2){return emp1.id-emp2.id});
    console.log("Inserisco empl");
}
mapEmployees(0,"Marco","Roberti",10,5);
mapEmployees(1,"Marco","Roberti",10,5);
