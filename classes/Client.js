let clientsId = 1;
const Dolar_Compra=1150
const Dolar_Venta=1200

class Client{
    constructor(dni, password, name, lastName,correo) {
        this.id = clientsId;
        clientsId++;
        this.dni = dni;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.correo = correo;
        this.creditCards = [];
        this.savingsBanks = [];
        //Otra opción es crear la primer caja de ahorro acá directamente...
        //this.savingsBanks = [new SavingsBanks("ARS", 50000, "FIRMA.TIPO.ALIAS")];
    }

    compraVentaUsd(caja1,caja2,monto){
        if (caja1.currency=="ARS"){
            if(caja1.extraerDinero(monto)){
                caja2.ingresarDinero(monto/Dolar_Venta)
                console.log(caja1)
                return caja2.balance
            }
        }else{
            if(caja1.extraerDinero(monto)){
                caja2.ingresarDinero(monto*Dolar_Compra)
                console.log(caja1)
                return caja2.balance
            }
        }return false
    }
}

let clients=[]
clients.push(new Client(12, "123", "Juani", "Teruya","j@"));
clients.push(new Client(48385351, "L123", "Lucas", "Simonetti","l@"));
clients.push(new Client(48520174, "sanfjkaf", "Pedro", "Gomez","p@"));
clients.push(new Client(48520175, "anita", "Ana", "Diaz","a@"));
clients.push(new Client(48520176, "Carlos12345", "Carlos", "Ruiz","c@"));
console.log(clients)

