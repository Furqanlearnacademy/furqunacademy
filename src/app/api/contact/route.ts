import { NextRequest, NextResponse } from "next/server";
import { resend, RESEND_FROM, NOTIFICATION_RECIPIENT } from "@/lib/resend";
import {
  ContactInquiryEmailData,
  generateContactEmailHtml,
  generateContactEmailText,
} from "@/lib/email-templates";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, subject, message, source } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailData: ContactInquiryEmailData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || undefined,
      subject: subject?.trim() || "Course & Academic Inquiry",
      message: message.trim(),
      source: source || "Contact Us Page",
    };

    const emailSubject = `📬 [Contact Inquiry] ${emailData.name} — ${emailData.subject}`;

    // Send email via Resend
    const response = await resend.emails.send({
      from: RESEND_FROM,
      to: [NOTIFICATION_RECIPIENT],
      replyTo: emailData.email,
      subject: emailSubject,
      html: generateContactEmailHtml(emailData),
      text: generateContactEmailText(emailData),
    });

    if (response.error) {
      console.error("Resend API error:", response.error);
      return NextResponse.json(
        { error: response.error.message || "Failed to send email notification." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: response.data?.id,
      message: "Contact message sent successfully!",
    });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
