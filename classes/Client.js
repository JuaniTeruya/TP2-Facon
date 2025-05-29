let clientId = 1;

class Client{
    /**
     * 
     * @param {int} DNI 
     * @param {str} contraseña
     * @param {str} nombre
     * @param {str} apellido 
     * @param {str} cajas
     */
    constructor(dni,contraseña,nombre,apellido){
        this.id = clientId;
        clientId++;
        this.dni = dni
        this.contraseña = contraseña;
        this.nombre=nombre;
        this.apellido=apellido;
        this.cajas = [cajaId];  
        this.tarjetas = [debitCardId];
    }
}

const clients = [];
clients.push(new Client ("12345678","xd", "Juani", "Teruya"));
console.log(clients)