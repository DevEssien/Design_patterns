class Subject {
	constructor() {
		this.observers = [];
	}

	subscribe(observer) {
		return this.observers.push(observer);
	}

	unsubscribe(observer) {
		this.observers = this.observers.filter((o) => o !== observer);
	}

	notify(data) {
		this.observers.forEach((o) => o.update(data));
	}
}

class Observer {
	constructor(name) {
		this.name = name;
	}

	update(data) {
		console.log(`${this.name} recieved ${data}`);
	}
}

const observer1 = new Observer("essien");
const observer2 = new Observer("alex");

const subject = new Subject();
subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("gem loading");
observer1.update("update data");
