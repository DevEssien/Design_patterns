const Bank = require("./bank");

class Chase extends Bank {
	processPayment() {
		console.log(
			`Your payment of $${this.amount} has been deposited in your ${this.account} Acount in chase bank`
		);
	}
	processRefund() {
		console.log(`A refund of ${this.amount} from ${this.account} has been processed by Chase Bank`);
	}
}

module.exports = Chase;
