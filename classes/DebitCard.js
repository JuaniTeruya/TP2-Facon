let debitCardIds = 1;

let cardNumbers = 1000000000000000;

class DebitCard {
    constructor(provider, emitionDate, securityCode, displayedName) {
        this.id = debitCardIds;
        debitCardIds++;

        this.number = cardNumbers;
        cardNumbers++;

        // VISA, American Express, CABAL, MasterCard...
        this.provider = provider;

        //Esto para que podamos poner distintas fechas de vencimiento.
        this.expireDate = emitionDate;
        this.expireDate.setFullYear(this.expireDate.getFullYear() + 5);

        this.securityCode = securityCode;
        // Ej: NICOLAS AGUST FACON o NICOLAS A FACON
        this.displayedName = displayedName;

        this.consumptions = [];
    }
}

clients[0].savingsBanks[0].debitCards.push(new DebitCard("MasterCard", new Date("2023-10-26"), 432, "Juani Teruya"));
clients[0].savingsBanks[1].debitCards.push(new DebitCard("Visa", new Date("2024-12-26"), 227, "Juani Teruya"));
clients[1].savingsBanks[0].debitCards.push(new DebitCard("MasterCard", new Date("2023-10-26"), 432, "Lucas Simonetti"));
clients[1].savingsBanks[1].debitCards.push(new DebitCard("Visa", new Date("2024-12-26"), 227, "Lucas Simonetti"));
clients[2].savingsBanks[0].debitCards.push(new DebitCard("MasterCard", new Date("2023-10-26"), 432, "Pedro Gomez"));
clients[2].savingsBanks[1].debitCards.push(new DebitCard("Visa", new Date("2024-12-26"), 227, "Pedro Gomez"));
clients[3].savingsBanks[0].debitCards.push(new DebitCard("MasterCard", new Date("2023-10-26"), 432, "Ana Diaz"));
clients[3].savingsBanks[1].debitCards.push(new DebitCard("Visa", new Date("2024-12-26"), 227, "Ana Diaz"));
clients[4].savingsBanks[0].debitCards.push(new DebitCard("MasterCard", new Date("2023-10-26"), 432, "Carlos Ruiz"));
clients[4].savingsBanks[1].debitCards.push(new DebitCard("Visa", new Date("2024-12-26"), 227, "Carlos Ruiz"));
