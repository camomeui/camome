import { NextApiRequest, NextApiResponse } from "next";

import { addSubscriber, sendEmail } from "@/lib/mailgun";

const successUrl = "/newsletter/success";
const failureUrl = "/newsletter/failure";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).end();
  }
  const { email } = req.body;
  if (!email) {
    return res.redirect(302, failureUrl);
  }
  try {
    await addSubscriber({ address: email });
    await sendEmail({
      subject: "New subscriber to Camome UI!",
      text: `New subscriber to Camome UI: ${email}`,
      to: "lemonburst1958@gmail.com",
    });
    res.redirect(302, successUrl);
  } catch (e) {
    if (
      e !== null &&
      typeof e === "object" &&
      "details" in e &&
      typeof e.details === "string" &&
      e.details.startsWith("Address already exists")
    ) {
      res.redirect(302, successUrl);
      return;
    }
    console.log(e);

    res.redirect(302, failureUrl);
  }
}
