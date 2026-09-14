import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  console.warn("⚠️ Notice: RESEND_API_KEY is not defined in environment variables. Running in safe mode.");
}

// Resend constructor throws if key is empty string.
// Using a placeholder prevents build failures when building in environments where RESEND_API_KEY is not yet added.
export const resend = new Resend(apiKey || "re_placeholder_for_build");

export const isResendConfigured = Boolean(
  apiKey && apiKey.trim().length > 0 && apiKey.startsWith("re_") && apiKey !== "re_placeholder_for_build"
);

export const RESEND_FROM =
  process.env.RESEND_FROM_EMAIL || "Furqan Learn Academy <notifications@furqanlearn.com>";
export const NOTIFICATION_RECIPIENT =
  process.env.CONTACT_NOTIFICATION_EMAIL || "contact@furqanlearn.com";
