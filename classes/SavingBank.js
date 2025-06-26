let savingsBanksId = 1;
//Es un número único de 22 dígitos que identifica la cuenta
let cbuCounter = BigInt(1000000000000000000000);

class SavingsBank {
    //Ponemos el límite como último parámetro para no tener que ingresarlo si está en USD.
    //Pero si le pasamos 0 no hay problema.
    constructor(currency, alias, limit) {
        this.id = savingsBanksId;
        savingsBanksId++;
        this.currency = currency;
        this.balance = 11000;
        if (currency == "ARS") {
            this.limit = limit;
            this.overdraft = 0;
        }
        this.debitCards = [];
        this.movements = [];
        this.alias = alias;
        //Lo tratamos como ID para que no se repitan.
        this.cbu = cbuCounter;
        cbuCounter++;
    }

    extraerDinero(monto) {
        if (this.currency == "USD") {
            if (monto <= this.balance) {
                this.balance = this.balance-monto
                return true
            } else {
                return false
            }
        } else {
            if (monto <= this.balance + this.limit) {
                if (monto <= this.balance) {
                    this.balance -= monto
                    return true
                } else {
                    monto = monto - this.balance
                    if (this.limit >= monto) {
                        this.overdraft = monto
                        this.balance = 0
                        return true
                    } else {
                        return false
                    }
                }
            } else { return false }
        }
    }

    ingresarDinero(monto) {
        if (this.currency == "USD") {
            this.balance = this.balance + monto
            return this.balance
        } else {
            if (this.overdraft > 0) {
                if (monto>this.overdraft) {
                    monto = monto - this.overdraft
                    this.balance += monto
                    return this.balance
                } else{
                    this.overdraft -= monto
                    return this.balance
                }
            } else {
                this.balance += monto
                return this.balance
            }
        }
    }

    movimientoSavings(thirdPartyName, amount, cuotes){
        let movement = new Movement(thirdPartyName, amount, cuotes);
        this.movements.push(movement);
        this.extraerDinero(amount)
        return true; 
    }

}

clients[0].savingsBanks.push(new SavingsBank("ARS", "JuaniTeruya", 10000))
clients[0].savingsBanks.push(new SavingsBank("USD", "JuaniTeruya2"))
clients[1].savingsBanks.push(new SavingsBank("ARS", "LucasSimonetti", 8000));
clients[1].savingsBanks.push(new SavingsBank("USD", "LucasSimonetti2"));
clients[2].savingsBanks.push(new SavingsBank("ARS", "PedroGomez", 10000));
clients[2].savingsBanks.push(new SavingsBank("USD", "PedroGomez2"));
clients[3].savingsBanks.push(new SavingsBank("ARS", "AnaDiaz", 12000));
clients[3].savingsBanks.push(new SavingsBank("USD", "AnaDiaz2"));
clients[4].savingsBanks.push(new SavingsBank("ARS", "CarlosRuiz", 10000));
clients[4].savingsBanks.push(new SavingsBank("USD", "CarlosRuiz2"));
