/**
 * Database connection pool can be implemented as a singleton pattern to prevent resource wastage
 *  that is to avoid duplications of connections everywhere
 */

class Database {
	constructor() {
		this.connection = null;
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
			return Database.instance;
		}
		return Database.instance;
	}

	connect() {
		return (this.connection = "Connected");
	}
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log("is same db instance ", db1 === db2);

db1.connect();

console.log("database connection ", db1.connection);
