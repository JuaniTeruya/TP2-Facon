let movementsId = 1;

class Movement{
    constructor(thirdPartyName, amount, cuotes) {
        this.id = movementsId;
        movementsId++;

        this.date = new Date();
        this.thirdPartyName = thirdPartyName;
        this.amount = amount;
        if(cuotes >= 1)
            this.cuotes = cuotes;
    }
}
// Para el primer cliente - Juani Teruya
// Savings Bank 1
clients[0].savingsBanks[0].movements.push(new Movement("MercadoLibre", 1500));  // Consumo en ARS
clients[0].savingsBanks[0].movements.push(new Movement("Netflix", 500));        // Otro consumo en ARS
// Savings Bank 2
clients[0].savingsBanks[1].movements.push(new Movement("Amazon", 300));         // Consumo en USD
clients[0].savingsBanks[1].movements.push(new Movement("Spotify", 10));         // Otro consumo en USD

// Tarjeta de débito 1 (Savings Bank 1)
clients[0].savingsBanks[0].debitCards[0].consumptions.push(new Movement("Porn Hub", 1500)); // Primer consumo con tarjeta de débito
clients[0].savingsBanks[0].debitCards[0].consumptions.push(new Movement("Twitch", 1000)); // Segundo consumo con tarjeta de débito
// Tarjeta de débito 2 (Savings Bank 2)
clients[0].savingsBanks[1].debitCards[0].consumptions.push(new Movement("Spotify", 500));  // Primer consumo con tarjeta de débito
clients[0].savingsBanks[1].debitCards[0].consumptions.push(new Movement("Twitch", 800));  // Segundo consumo con tarjeta de débito

// Tarjeta de crédito 1 (Savings Bank 1)
clients[0].creditCards[0].consumptions.push(new Movement("Xvideos", 1500));    // Primer consumo con tarjeta de crédito
clients[0].creditCards[0].consumptions.push(new Movement("Amazon", 2500));     // Segundo consumo con tarjeta de crédito
// Tarjeta de crédito 2 (Savings Bank 2)
clients[0].creditCards[1].consumptions.push(new Movement("eBay", 1200));       // Primer consumo con tarjeta de crédito
clients[0].creditCards[1].consumptions.push(new Movement("Netflix", 1000));    // Segundo consumo con tarjeta de crédito

// Para el segundo cliente - Lucas Simonetti
// Savings Bank 1
clients[1].savingsBanks[0].movements.push(new Movement("Uber", 1000));          // Consumo en ARS
clients[1].savingsBanks[0].movements.push(new Movement("Carrefour", 1200));     // Otro consumo en ARS
// Savings Bank 2
clients[1].savingsBanks[1].movements.push(new Movement("eBay", 50));           // Consumo en USD
clients[1].savingsBanks[1].movements.push(new Movement("Airbnb", 200));         // Otro consumo en USD

// Tarjeta de débito 1 (Savings Bank 1)
clients[1].savingsBanks[0].debitCards[0].consumptions.push(new Movement("Netflix", 1000)); // Primer consumo con tarjeta de débito
clients[1].savingsBanks[0].debitCards[0].consumptions.push(new Movement("Spotify", 500)); // Segundo consumo con tarjeta de débito
// Tarjeta de débito 2 (Savings Bank 2)
clients[1].savingsBanks[1].debitCards[0].consumptions.push(new Movement("Airbnb", 700)); // Primer consumo con tarjeta de débito
clients[1].savingsBanks[1].debitCards[0].consumptions.push(new Movement("eBay", 350));  // Segundo consumo con tarjeta de débito

// Tarjeta de crédito 1 (Savings Bank 1)
clients[1].creditCards[0].consumptions.push(new Movement("HBO Max", 1200));    // Primer consumo con tarjeta de crédito
clients[1].creditCards[0].consumptions.push(new Movement("Disney+", 700));     // Segundo consumo con tarjeta de crédito
// Tarjeta de crédito 2 (Savings Bank 2)
clients[1].creditCards[1].consumptions.push(new Movement("Amazon", 1500));     // Primer consumo con tarjeta de crédito
clients[1].creditCards[1].consumptions.push(new Movement("Twitch", 800));      // Segundo consumo con tarjeta de crédito

// Para el tercer cliente - Pedro Gomez
// Savings Bank 1
clients[2].savingsBanks[0].movements.push(new Movement("Shopee", 700));         // Consumo en ARS
clients[2].savingsBanks[0].movements.push(new Movement("MercadoPago", 1000));   // Otro consumo en ARS
// Savings Bank 2
clients[2].savingsBanks[1].movements.push(new Movement("Apple Store", 200));    // Consumo en USD
clients[2].savingsBanks[1].movements.push(new Movement("Disney+", 15));         // Otro consumo en USD

// Tarjeta de débito 1 (Savings Bank 1)
clients[2].savingsBanks[0].debitCards[0].consumptions.push(new Movement("Spotify", 500));  // Primer consumo con tarjeta de débito
clients[2].savingsBanks[0].debitCards[0].consumptions.push(new Movement("Amazon", 1200));  // Segundo consumo con tarjeta de débito
// Tarjeta de débito 2 (Savings Bank 2)
clients[2].savingsBanks[1].debitCards[0].consumptions.push(new Movement("Disney+", 100));  // Primer consumo con tarjeta de débito
clients[2].savingsBanks[1].debitCards[0].consumptions.push(new Movement("Apple Store", 300)); // Segundo consumo con tarjeta de débito

// Tarjeta de crédito 1 (Savings Bank 1)
clients[2].creditCards[0].consumptions.push(new Movement("Amazon", 1500));  // Primer consumo con tarjeta de crédito
clients[2].creditCards[0].consumptions.push(new Movement("eBay", 250));     // Segundo consumo con tarjeta de crédito
// Tarjeta de crédito 2 (Savings Bank 2)
clients[2].creditCards[1].consumptions.push(new Movement("Spotify", 120));   // Primer consumo con tarjeta de crédito
clients[2].creditCards[1].consumptions.push(new Movement("Apple Store", 400));  // Segundo consumo con tarjeta de crédito

// Para el cuarto cliente - Ana Diaz
// Savings Bank 1
clients[3].savingsBanks[0].movements.push(new Movement("Google Play", 1500));   // Consumo en ARS
clients[3].savingsBanks[0].movements.push(new Movement("Bancolombia", 800));    // Otro consumo en ARS
// Savings Bank 2
clients[3].savingsBanks[1].movements.push(new Movement("Spotify", 12));         // Consumo en USD
clients[3].savingsBanks[1].movements.push(new Movement("Uber Eats", 30));       // Otro consumo en USD

// Tarjeta de débito 1 (Savings Bank 1)
clients[3].savingsBanks[0].debitCards[0].consumptions.push(new Movement("Google Play", 700));  // Primer consumo con tarjeta de débito
clients[3].savingsBanks[0].debitCards[0].consumptions.push(new Movement("Uber Eats", 500));  // Segundo consumo con tarjeta de débito
// Tarjeta de débito 2 (Savings Bank 2)
clients[3].savingsBanks[1].debitCards[0].consumptions.push(new Movement("Google Play", 800)); // Primer consumo con tarjeta de débito
clients[3].savingsBanks[1].debitCards[0].consumptions.push(new Movement("Uber Eats", 1000)); // Segundo consumo con tarjeta de débito

// Tarjeta de crédito 1 (Savings Bank 1)
clients[3].creditCards[0].consumptions.push(new Movement("Apple Store", 200));  // Primer consumo con tarjeta de crédito
clients[3].creditCards[0].consumptions.push(new Movement("Netflix", 1000));    // Segundo consumo con tarjeta de crédito
// Tarjeta de crédito 2 (Savings Bank 2)
clients[3].creditCards[1].consumptions.push(new Movement("Amazon", 800));      // Primer consumo con tarjeta de crédito
clients[3].creditCards[1].consumptions.push(new Movement("Uber Eats", 400));   // Segundo consumo con tarjeta de crédito

// Para el quinto cliente - Carlos Ruiz
// Savings Bank 1
clients[4].savingsBanks[0].movements.push(new Movement("McDonald's", 800));     // Consumo en ARS
clients[4].savingsBanks[0].movements.push(new Movement("Spotify", 1000));      // Otro consumo en ARS
// Savings Bank 2
clients[4].savingsBanks[1].movements.push(new Movement("Amazon Prime", 25));    // Consumo en USD
clients[4].savingsBanks[1].movements.push(new Movement("Twitch", 15));          // Otro consumo en USD

// Tarjeta de débito 1 (Savings Bank 1)
clients[4].savingsBanks[0].debitCards[0].consumptions.push(new Movement("Uber Eats", 800));  // Primer consumo con tarjeta de débito
clients[4].savingsBanks[0].debitCards[0].consumptions.push(new Movement("Spotify", 500));   // Segundo consumo con tarjeta de débito
// Tarjeta de débito 2 (Savings Bank 2)
clients[4].savingsBanks[1].debitCards[0].consumptions.push(new Movement("Spotify", 700));   // Primer consumo con tarjeta de débito
clients[4].savingsBanks[1].debitCards[0].consumptions.push(new Movement("Uber Eats", 600));  // Segundo consumo con tarjeta de débito

// Tarjeta de crédito 1 (Savings Bank 1)
clients[4].creditCards[0].consumptions.push(new Movement("Twitch", 400));  // Primer consumo con tarjeta de crédito
clients[4].creditCards[0].consumptions.push(new Movement("Amazon", 1200)); // Segundo consumo con tarjeta de crédito
// Tarjeta de crédito 2 (Savings Bank 2)
clients[4].creditCards[1].consumptions.push(new Movement("Amazon Prime", 500)); // Primer consumo con tarjeta de crédito
clients[4].creditCards[1].consumptions.push(new Movement("Netflix", 700));   // Segundo consumo con tarjeta de crédito
