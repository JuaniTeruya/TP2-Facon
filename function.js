posicionUsuario = 0

function findClient(id) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id == id)
            return i
    }
    return -1
}

function findCajas(idCliente) {
    let i = findClient(idCliente)
    let cajasUser = []
    if (i != -1) {
        for (let j = 0; j < clients[i].savingsBanks.length; j++) {
            cajasUser.push(clients[i].savingsBanks[j])
        }
        return cajasUser
    }
}

function findTarjetaDebitoCliente(idCliente) {
    let i = findClient(idCliente)
    let tarjetasDebito = []
    if (i != -1) {
        for (let j = 0; j < clients[i].savingsBanks.length; j++) {
            for (let x = 0; x < clients[i].savingsBanks[j].debitCards.length; x++) {
                tarjetasDebito.push(clients[i].savingsBanks[j].debitCards[x])
            }
        }
        return tarjetasDebito
    }
}

function findTarjetaDebito(idTarjeta) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingsBanks.length; j++) {
            for (let x = 0; x < clients[i].savingsBanks[j].debitCards.length; x++) {
                if (clients[i].savingsBanks[j].debitCards[x].id == idTarjeta) {
                    return clients[i].savingsBanks[j].debitCards[x]
                }
            }
        }
    }
    return -1
}


function findTarjetaCreditoClinte(idCliente) {
    let i = findClient(idCliente)
    let tarjetasCredito = []
    if (i != -1) {
        for (let j = 0; j < clients[i].creditCards.length; j++) {
            tarjetasCredito.push(clients[i].creditCards[j])
        }
        return tarjetasCredito
    }
    return -1
}

function findTarjetaCredito(idTarjeta) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].creditCards.length; j++) {
            if (clients[i].creditCards[j].id == idTarjeta) {
                return clients[i].creditCards[j];
            }
        }
    }
    return -1;
}



function findMovementsSavingBanks(idCaja) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingsBanks.length; j++) {
            if (clients[i].savingsBanks[j].id == idCaja) {
                return clients[i].savingsBanks[j].movements;
            }
        }
    }
    return -1;
}


function findMovementsCreditCards(idCreditCard) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].creditCards.length; j++) {
            if (clients[i].creditCards[j].id == idCreditCard) {
                return clients[i].creditCards[j].consumptions;
            }
        }
    }
    return -1;
}

function findMovementsTarjetaDebito(idTarjeta) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingsBanks.length; j++) {
            for (let x = 0; x < clients[i].savingsBanks[j].debitCards.length; x++) {
                if (clients[i].savingsBanks[j].debitCards[x].id == idTarjeta) {
                    return clients[i].savingsBanks[j].debitCards[x].consumptions
                }
            }
        }
    }
    return -1
}
function encontrarCaja(idCaja) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingsBanks.length; j++) {
            if (clients[i].savingsBanks[j].id == idCaja) {
                return clients[i].savingsBanks[j]
            }
        }
    }
}
function transferenciaUsuarios(idCaja, idCaja2, monto) {
    if (encontrarCaja(idCaja).currency==encontrarCaja(idCaja2).currency) {
        encontrarCaja(idCaja).extraerDinero(monto)
        encontrarCaja(idCaja2).ingresarDinero(monto)
        return true
    }else{
        return false
    }
}

/*==========================================
 LUQUI A PARTIR DE ACA DEJAS DE ENTENDER
==========================================*/

function revisarIngreso() {
    for (let i = 0; i < clients.length; i++) {
        if (ui.getDniLog() == parseInt(clients[i].dni) && ui.getPasswordLog() == clients[i].password) {
            posicionUsuario = i
            document.getElementById("nombreUsuarioLogeado").innerText = clients[i].name;
            return true;
        }
    }
    return false;
}

function chequeoIngreso(){
    if(revisarIngreso()){
        ui.showModal("Exito","Te has logeado correctamente")
        document.getElementsByClassName("navbar-toggler")[0].hidden = false;
        document.getElementsByClassName("col-md-6")[0].hidden = true;
        mostrarSavings()
        mostrarSelectDebito()
        mostrarCuentaTransferencias()
        mostrarCuentaPesosDolares()
        mostrarSelectCredito()
        mostrarTodasTarjetas()
        mostrarSavingsInversiones()
    }else{
        ui.showModal("Error","Creedenciales incorrectas")
    }
}

function revisarRegistro(){
    for(let i = 0; i < clients.length; i++){
        if(clients[i].dni==ui.getDniReg()|| clients[i].correo==ui.getEmailReg()){
            return false
        }
    }
    if(ui.getDniReg().length<7){
        return false
    }else{
        return true
    }
}

function chequeoRegistro(){
    if(revisarRegistro()){
        clients.push(new Client(parseInt(ui.getDniReg()), ui.getPasswordReg(), ui.getNombreReg(), ui.getApellidoReg(), ui.getEmailReg()));
        ui.showModal("Exito","cliente creado correctamente")
    }else{
        ui.showModal("Error","No se ha podido crear la cuenta")
    }
}

function logout(){
    document.getElementsByClassName("navbar-toggler")[0].hidden = true;
    document.getElementsByClassName("col-md-6")[0].hidden = false;
    idUsuario=0
}

function mostrarSavings(){
    for(let i=0;i<clients[posicionUsuario].savingsBanks.length;i++){
            if(clients[posicionUsuario].savingsBanks[i].currency=="ARS"){
                ui.mostrarAccountsPesos(clients[posicionUsuario].savingsBanks[i].currency,clients[posicionUsuario].savingsBanks[i].balance,clients[posicionUsuario].savingsBanks[i].limit,clients[posicionUsuario].savingsBanks[i].overdraft,clients[posicionUsuario].savingsBanks[i].alias,clients[posicionUsuario].savingsBanks[i].cbu)
            }else{
                ui.mostrarAccountsDolares(clients[posicionUsuario].savingsBanks[i].currency,clients[posicionUsuario].savingsBanks[i].balance,clients[posicionUsuario].savingsBanks[i].alias,clients[posicionUsuario].savingsBanks[i].cbu)
            }
        }
}

function mostrarSelectDebito(){
    for(let i=0;i<clients[posicionUsuario].savingsBanks.length;i++){
        for(let j=0;j<clients[posicionUsuario].savingsBanks[i].debitCards.length;j++){
            ui.selectTarjetasDebito(clients[posicionUsuario].savingsBanks[i].debitCards[j].id,clients[posicionUsuario].savingsBanks[i].debitCards[j].securityCode,clients[posicionUsuario].savingsBanks[i].debitCards[j].displayedName)
        }
    }
}

function mostrarCuentaTransferencias(){
    for(let i=0;i<clients.length;i++){
        if(i==posicionUsuario){
            for (let j = 0; j < clients[i].savingsBanks.length;j++) {
                ui.selectCuentaTransferencias(clients[i].savingsBanks[j].id,clients[i].savingsBanks[j].alias)
            }
        }else{
           for (let j = 0; j < clients[i].savingsBanks.length;j++) {
                ui.selectCuentaTransferencias2(clients[i].savingsBanks[j].id,clients[i].savingsBanks[j].alias)
            } 
        }
    }
}

function mostrarCuentaPesosDolares(){
    for (let i = 0; i < clients[i].savingsBanks.length;i++) {
        if (clients[posicionUsuario].savingsBanks[i].currency == "ARS") {
            ui.selectCuentaPesosDolares(clients[posicionUsuario].savingsBanks[i].id,clients[posicionUsuario].savingsBanks[i].alias)
        }else{
            ui.selectCuentaPesosDolares2(clients[posicionUsuario].savingsBanks[i].id,clients[posicionUsuario].savingsBanks[i].alias)
        }
    }
}

function mostrarSelectCredito(){
    for(let i=0;i<clients[posicionUsuario].creditCards.length;i++){
        ui.selectTarjetasCredito(clients[posicionUsuario].creditCards[i].id,clients[posicionUsuario].creditCards[i].securityCode,clients[posicionUsuario].creditCards[i].displayedName)
    }
}

function mostrarTodasTarjetas(){
    for(let i=0;i<clients[posicionUsuario].savingsBanks.length;i++){
        for(let j=0;j<clients[posicionUsuario].savingsBanks[i].debitCards.length;j++){
            ui.selectTarjetas(clients[posicionUsuario].savingsBanks[i].debitCards[j].id,clients[posicionUsuario].savingsBanks[i].debitCards[j].securityCode,clients[posicionUsuario].savingsBanks[i].debitCards[j].displayedName,"Debito")
        }
    }
    for(let i=0;i<clients[posicionUsuario].creditCards.length;i++){
        ui.selectTarjetas(clients[posicionUsuario].creditCards[i].id,clients[posicionUsuario].creditCards[i].securityCode,clients[posicionUsuario].creditCards[i].displayedName,"Credito")
    }
}

function mostrarSavingsInversiones(){
    for(let i=0;i<clients[posicionUsuario].savingsBanks.length;i++){
        ui.selectInversiones(clients[posicionUsuario].savingsBanks[i].alias,clients[posicionUsuario].savingsBanks[i].id)
    }
}