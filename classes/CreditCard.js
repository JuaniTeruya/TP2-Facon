

let creditCardIds = 1;

class CreditCard {
    constructor(provider, emitionDate, securityCode, displayedName, closeDate, expiresBalanceDate) {
        this.id = creditCardIds;
        creditCardIds++;

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

        this.balance = 0;
        //Esto no es la realidad, es por simplificar
        //Si el clientse usa el pago mínimo o paga menos del total
        //Vamos a modificar este valor
        //Si solo pagaron totales = balance * interes (1) = balance
        //Si hicieron algún pago menor = balance * interes (1,algo)
        this.interest = 1;

        //Lo vamos a usar solo a título informativo

        //Cuando cierra tu "mes", hasta los gastos de qué día tenes que pagar este mes
        this.closeDate = closeDate;
        //Cuando tenes que pagar.
        this.expiresBalanceDate = expiresBalanceDate;
    }
}


clients[0].creditCards.push(new CreditCard("MasterCard",new Date ("2023-10-26"),301,"Juani Teruya"))
clients[0].creditCards.push(new CreditCard("Visa",new Date ("2024-12-26"),665,"Juani Teruya"))
clients[1].creditCards.push(new CreditCard("MasterCard", new Date("2023-10-26"), 301, "Lucas Simonetti"));
clients[1].creditCards.push(new CreditCard("Visa", new Date("2024-12-26"), 665, "Lucas Simonetti"));
clients[2].creditCards.push(new CreditCard("MasterCard", new Date("2023-10-26"), 301, "Pedro Gomez"));
clients[2].creditCards.push(new CreditCard("Visa", new Date("2024-12-26"), 665, "Pedro Gomez"));
clients[3].creditCards.push(new CreditCard("MasterCard", new Date("2023-10-26"), 301, "Ana Diaz"));
clients[3].creditCards.push(new CreditCard("Visa", new Date("2024-12-26"), 665, "Ana Diaz"));
clients[4].creditCards.push(new CreditCard("MasterCard", new Date("2023-10-26"), 301, "Carlos Ruiz"));
clients[4].creditCards.push(new CreditCard("Visa", new Date("2024-12-26"), 665, "Carlos Ruiz"));