import { NextRequest, NextResponse } from "next/server";
import { resend, RESEND_FROM, NOTIFICATION_RECIPIENT } from "@/lib/resend";
import {
  TrialBookingEmailData,
  generateTrialEmailHtml,
  generateTrialEmailText,
} from "@/lib/email-templates";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      age,
      gender,
      teacherPreference,
      country,
      countryDialCode,
      whatsappNumber,
      courseTitle,
      courseTag,
      preferredDate,
      preferredTime,
      message,
      source,
    } = body;

    // Validate required fields
    if (!email || !courseTitle) {
      return NextResponse.json(
        { error: "Email and course selection are required." },
        { status: 400 }
      );
    }

    const emailData: TrialBookingEmailData = {
      firstName: firstName || "Student",
      lastName: lastName || "",
      email: email.trim(),
      age: age ? String(age) : undefined,
      gender,
      teacherPreference,
      country,
      countryDialCode,
      whatsappNumber,
      courseTitle,
      courseTag,
      preferredDate,
      preferredTime,
      message,
      source: source || "Home Page Free Trial Form",
    };

    const studentFullName = `${emailData.firstName} ${emailData.lastName}`.trim();
    const emailSubject = `🌟 [Free Trial Request] ${studentFullName} — ${emailData.courseTitle}`;

    // Send email via Resend
    const response = await resend.emails.send({
      from: RESEND_FROM,
      to: [NOTIFICATION_RECIPIENT],
      replyTo: emailData.email,
      subject: emailSubject,
      html: generateTrialEmailHtml(emailData),
      text: generateTrialEmailText(emailData),
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
      message: "Trial class request sent successfully!",
    });
  } catch (error: unknown) {
    console.error("Trial API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
