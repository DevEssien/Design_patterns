const { Email } = require("./emailAdapter");
const MailTrapSender = require("./mailtrap");

const email = new Email("essienemma300dev@gmail.com", "VaultTran otp", "your otp is 123456");

async function sendMail() {
	const e = await MailTrapSender.send(email);
	console.log("eeee ", e);
}

sendMail();
