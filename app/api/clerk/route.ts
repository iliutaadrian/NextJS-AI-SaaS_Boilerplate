import { sendWelcomeEmail } from "@/lib/emails/emails";
import { WebhookEvent } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  const payload: WebhookEvent = await request.json();
  console.log(payload);
  if (payload.type === "user.created") {
    if (payload.data.email_addresses[0]) {
      const email = payload.data.email_addresses[0].email_address;
      await sendWelcomeEmail(email);
    }
  }
  return new Response("OK", { status: 200 });
}
