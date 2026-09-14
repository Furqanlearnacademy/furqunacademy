import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  console.warn("⚠️ Warning: RESEND_API_KEY is not defined in environment variables.");
}

export const resend = new Resend(process.env.RESEND_API_KEY || "");
export const RESEND_FROM = process.env.RESEND_FROM_EMAIL || "Furqan Learn Academy <notifications@furqanlearn.com>";
export const NOTIFICATION_RECIPIENT = process.env.CONTACT_NOTIFICATION_EMAIL || "contact@furqanlearn.com";
