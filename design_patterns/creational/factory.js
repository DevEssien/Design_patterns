/**
 * When dealing with asynchronous operations like reading files or api calls, factory pattern simplifies object creation
 */

class Car {
	constructor(model, price) {
		this.model = model;
		this.price = price;
	}
}

class CarFactory {
	createCar(model) {
		switch (model) {
			case "civic":
				return new Car("Honda Civic", 2000000);
			case "accord":
				return new Car("Honda Accord", 2500000);
			case "odyssey":
				return new Car("Honda Odyssey", 3000000);
			default:
				throw new Error("Unknown model!");
		}
	}
}

const factory = new CarFactory();

const accord = factory.createCar("accord");
const odyssey = factory.createCar("odyssey");

console.log("accord ", accord.model);
console.log("odyssey ", odyssey.model);
