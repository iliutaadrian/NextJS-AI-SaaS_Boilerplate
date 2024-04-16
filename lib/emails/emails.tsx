import { Resend } from "resend";
import WelcomeEmail from "./welcome";

export const sendWelcomeEmail = async (email: string) => {
  const resend = new Resend("re_G4gEogmh_KUFJtuVB4jAWMBSPXAzXKPDv");
  await resend.emails.send({
    from: "welcome@resend.dev",
    to: email,
    subject: "Welcome",
    react: <WelcomeEmail />,
  });
};
