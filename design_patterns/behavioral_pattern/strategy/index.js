const Payment = require("./context");
const CityBank = require("./cityBank");
const ChaseBank = require("./chaseBank");

const cityBank = new CityBank(200, "1423445763");
const chaseBank = new ChaseBank(300, "21412236732");

const payment = new Payment();

payment.pay(cityBank);
payment.pay(chaseBank);
