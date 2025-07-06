idUsuario = 0

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

function revisarIngreso() {
    for (let i = 0; i < clients.length; i++) {
        if (ui.getDniLog() == parseInt(clients[i].dni) && ui.getPasswordLog() == clients[i].password) {
            idUsuario = clients[i].id
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