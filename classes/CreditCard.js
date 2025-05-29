let debitCardId = 1;

class Tarjeta{
    /**
     * 
     * @param {int} numeroTarjeta
     * @param {str} proveedor 
     * @param {date} vencimiento
     * @param {int} userId 
     * @param {int} codigoSeguridad
     * @param {str} nombrePersona
     */
    constructor(nTarjeta,proveedor,vencimiento,codigoSeguridad,nombrePersona){
        this.id = creditCardId;
        creditCardId++;
        this.nTarjeta = nTarjeta;
        this.proveedor=proveedor;
        this.vencimiento = vencimiento;
        this.codigoSeguridad = codigoSeguridad;
        this.nombrePersona = nombrePersona;
        this.historial = [];
    }
}
