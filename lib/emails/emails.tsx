import { Resend } from "resend";
import WelcomeEmail from "./welcome";

export const sendWelcomeEmail = async (email: string) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "welcome@resend.dev",
    to: email,
    subject: "Welcome",
    react: <WelcomeEmail />,
  });
};
