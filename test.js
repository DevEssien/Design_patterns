class Transport {
	deliver() {}
}

class Logistics {
	createTransport() {}

	planDelivery() {
		const transport = this.createTransport();
		return transport.deliver();
	}
}

class AirMail extends Transport {
	deliver() {
		console.log('Delivering cargo by Plane')
	}
}

class SeaMail extends Transport {
	deliver() {
		console.log('Delivering cargo by Ship');
	}
}

class AirLogistics extends Logistics {
	createTransport() {
		return new AirMail();
	}
}

class SeaLogistics extends Logistics {
	createTransport() {
		return new SeaMail()
	}
}

const airLogistics = new AirLogistics();
const seaLogistics = new SeaLogistics()
airLogistics.planDelivery();
seaLogistics.planDelivery();