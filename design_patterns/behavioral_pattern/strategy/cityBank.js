const Bank = require("./bank");

class City extends Bank {
	processPayment() {
		console.log(
			`Your payment of $${this.amount} has been deposited in your ${this.account} Acount in City bank`
		);
	}
	processRefund() {
		console.log(`A refund of ${this.amount} from ${this.account} has been processed by City Bank`);
	}
}

module.exports = City;
