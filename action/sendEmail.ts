"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");
  if (
    !senderEmail ||
    !message ||
    typeof senderEmail !== "string" ||
    typeof message !== "string"
  ) {
    throw new Error("Missing fields!");
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "alekhandrofor@gmail.com",
    subject: "Message from contact form",
    text: message,
  });
};
