class Email {
	constructor(to, subject, body) {
		this.to = to;
		this.subject = subject;
		this.body = body;
	}
}
class EmailAdapter {
	constructor(config) {
		this.config = config;
	}

	// async send(email) {
	// 	const formatedEmail = this.convertEmail(email);
	// 	const sentMail = await this.emailSender.send(formatedEmail);
	// 	console.log("sentMail ", sentMail);
	// }

	async send(to, subject, body) {}

	convertEmail(email) {
		// Implement logic to convert Email object to a format accepted by emailSender
		// This might involve converting properties or adding additional information

		return {
			to: email.to,
			subject: email.subject,
			text: email.body,
		};
	}
}

module.exports = {
	EmailAdapter,
	Email,
};
