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

let clients=[]
clients.push(new Client(48520172, "123", "Juani", "Teruya"));
clients.push(new Client(48385351, "L123", "Lucas", "Simonetti"));
clients.push(new Client(48520174, "sanfjkaf", "Pedro", "Gomez"));
clients.push(new Client(48520175, "anita", "Ana", "Diaz"));
clients.push(new Client(48520176, "Carlos12345", "Carlos", "Ruiz"));
console.log(clients)

let savingsBanksId = 1;
//Es un número único de 22 dígitos que identifica la cuenta
let cbuCounter = BigInt(1000000000000000000000);

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

clients[0].savingsBanks.push(new SavingsBank("ARS","JuaniTeruya",10000))
clients[0].savingsBanks.push(new SavingsBank("USD","JuaniTeruya2"))
clients[1].savingsBanks.push(new SavingsBank("ARS", "LucasSimonetti", 8000));
clients[1].savingsBanks.push(new SavingsBank("USD", "LucasSimonetti2"));
clients[2].savingsBanks.push(new SavingsBank("ARS", "PedroGomez", 10000));
clients[2].savingsBanks.push(new SavingsBank("USD", "PedroGomez2"));
clients[3].savingsBanks.push(new SavingsBank("ARS", "AnaDiaz", 12000));
clients[3].savingsBanks.push(new SavingsBank("USD", "AnaDiaz2"));
clients[4].savingsBanks.push(new SavingsBank("ARS", "CarlosRuiz", 10000));
clients[4].savingsBanks.push(new SavingsBank("USD", "CarlosRuiz2"));
