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
    employee.append(impiegato);
}
