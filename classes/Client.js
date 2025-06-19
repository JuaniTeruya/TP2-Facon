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

    compraVentaUsd(caja1,caja2,monto){
        if (caja1.currency="ARS"){
            if(caja1.balance>monto){
                caja1.balance -=  monto
                caja2.balance = caja2.balance + (monto / 1170)
                return true
            } else {
                return false
            }
        }
    }
}

let clients=[]
clients.push(new Client(48520172, "123", "Juani", "Teruya"));
clients.push(new Client(48385351, "L123", "Lucas", "Simonetti"));
clients.push(new Client(48520174, "sanfjkaf", "Pedro", "Gomez"));
clients.push(new Client(48520175, "anita", "Ana", "Diaz"));
clients.push(new Client(48520176, "Carlos12345", "Carlos", "Ruiz"));
console.log(clients)

