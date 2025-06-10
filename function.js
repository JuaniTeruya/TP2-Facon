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
        console.log(cajasUser)
    }
}
findCajas(1)