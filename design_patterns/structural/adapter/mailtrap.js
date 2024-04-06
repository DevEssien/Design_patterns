const { MailtrapClient } = require("mailtrap");
const { EmailAdapter } = require("./emailAdapter");

const TOKEN = "";
const ENDPOINT = "";

class MailTrapSender extends EmailAdapter {
	constructor(config) {
		super(config);
		this.client = new MailtrapClient(config);
	}
	async send(email) {
		const $email = this.convertEmail(email);
		try {
			const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

			const sender = {
				email: "mailtrap@demomailtrap.com",
				name: "Mailtrap Test",
			};
			const recipients = [
				{
					email: $email.to,
				},
			];

			const response = await client.send({
				from: sender,
				to: recipients,
				subject: $email.subject ?? "Interactro Message",
				text: $email.text,
				category: "Integration Test",
			});
			if (!response.success) return { success: false };
			return { success: true };
		} catch (error) {
			console.log("error ", error);
		}
	}
}

const mailtrapSender = new MailTrapSender({ ENDPOINT, TOKEN });
module.exports = mailtrapSender;
