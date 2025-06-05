let clientsId = 1;

class Client{
    constructor(dni, password, name, lastName) {
        this.id = clientsId;
        clientsId++;
        this.dni = dni;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.creditCards = [];
        this.savingsBanks = [];
        //Otra opción es crear la primer caja de ahorro acá directamente...
        //this.savingsBanks = [new SavingsBanks("ARS", 50000, "FIRMA.TIPO.ALIAS")];
    }
}

let savingsBanksId = 1;
//Es un número único de 22 dígitos que identifica la cuenta
let cbuCounter = 1000000000000000000000;

class SavingsBank{
    //Ponemos el límite como último parámetro para no tener que ingresarlo si está en USD.
    //Pero si le pasamos 0 no hay problema.
    constructor(currency, alias, limit) {
        this.id = savingsBanksId;
        savingsBanksId++;
        this.currency = currency;
        this.balance = 0;
        if(currency == "ARS") {
            this.limit = limit;
            this.overdraft = 0;
        }
        this.debitCards = [];
        this.movements = [];
        this.alias = alias;
        //Lo tratamos como ID para que no se repitan.
        this.cbu = cbuCounter;
        cbuCounter++;
    }
}