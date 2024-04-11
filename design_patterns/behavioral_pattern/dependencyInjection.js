// service.js
class Service {
	constructor(db, logger) {
		this.db = db;
		this.logger = logger;
	}

	async getUser(userId) {
		const user = await this.db.findUserById(userId);
		this.logger.log(`Fetched user ${user.name}`);
		return user;
	}
}

// app.js
const Database = require("./database");
const Logger = require("./logger");

const db = new Database();
const logger = new Logger();

const service = new Service(db, logger);

service.getUser(1);
