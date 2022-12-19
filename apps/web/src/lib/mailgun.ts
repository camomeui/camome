import formData from "form-data";
import Mailgun from "mailgun.js";

if (!process.env.MAILGUN_API_KEY) {
  throw new Error("MAILGUN_API_KEY is undefined");
}

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

type SendEmailParams = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

export async function sendEmail(email: SendEmailParams) {
  await mg.messages.create("camome.net", {
    from: `Camome UI <info@camome.net>`,
    ...email,
  });
}

type AddSubscriberParams = {
  address: string;
};

export async function addSubscriber({ address }: AddSubscriberParams) {
  return mg.lists.members.createMember("info@camome.net", { address });
}
