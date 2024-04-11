/**
 * examples are authenticated routes, logging wrappers, caching decorators
 */

class Car {
	constructor() {
		this.price = 2000000;
	}

	getPrice() {
		return this.price;
	}
}

class CarWithOptions {
	constructor(car) {
		this.car = car;
	}

	addGPS() {
		return (this.car.price += 800);
	}

	addRim() {
		return (this.car.price += 500);
	}
}

const car = new Car();
console.log("car ", car.getPrice());

const carWithOptions = new CarWithOptions(car);
carWithOptions.addGPS();
carWithOptions.addRim();

console.log("car with options ", carWithOptions.car.getPrice());
