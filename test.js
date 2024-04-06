const { MailtrapClient } = require("mailtrap");

const TOKEN = "343a2dd645961ac6332d57fe3509e516";
const ENDPOINT = "https://send.api.mailtrap.io/";

async function sendMail(email, subject, text) {
	try {
		const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

		const sender = {
			email: "mailtrap@demomailtrap.com",
			name: "Mailtrap Test",
		};
		const recipients = [
			{
				email: email,
			},
		];

		const response = await client.send({
			from: sender,
			to: recipients,
			subject: subject ?? "Interactro Message",
			text: text,
			category: "Integration Test",
		});
		console.log("response ", response);
		return response;
	} catch (error) {
		console.log("error ", error);
	}
}

sendMail("essienemma300dev@gmail.com", "test", "testing again now");
