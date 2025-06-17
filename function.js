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
    for (let i = 0; i<clients.length; i++) {
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
        return  tarjetasCredito
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
    for (let i = 0; i<clients.length; i++) {
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