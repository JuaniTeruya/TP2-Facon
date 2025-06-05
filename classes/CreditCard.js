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
        //Si el cliente usa el pago mínimo o paga menos del total
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