let cajaId = 1;


class Caja{
    /**
     * @param {str}moneda
     * @param {int} saldo
     * @param {int} limiteDescubierto 
     * @param {int} montoDescubierto
     */
    constructor(moneda,saldo, limiteDescubierto, montoDescubierto){
        this.id = cajaId;
        cajaId++;
        this.moneda = moneda
        this.saldo = saldo
        this.limiteDescubierto = limiteDescubierto
        this.montoDescubierto = montoDescubierto
        this.tarjets = [tarjetaId]
        this.historial = []
    }
}

