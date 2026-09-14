export interface TrialBookingEmailData {
  firstName: string;
  lastName: string;
  email: string;
  age?: string;
  gender?: string;
  teacherPreference?: string;
  country?: string;
  countryDialCode?: string;
  whatsappNumber?: string;
  courseTitle: string;
  courseTag?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  source?: string;
}

export interface ContactInquiryEmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  source?: string;
}

/**
 * Generate luxury styled HTML for Free Trial Booking notification email
 */
export function generateTrialEmailHtml(data: TrialBookingEmailData): string {
  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const cleanPhone = (data.whatsappNumber || "").replace(/\D/g, "");
  const dialCodeDigits = (data.countryDialCode || "").replace(/\D/g, "");
  const fullWhatsapp = dialCodeDigits && cleanPhone ? `${dialCodeDigits}${cleanPhone}` : cleanPhone;
  const whatsappUrl = fullWhatsapp ? `https://wa.me/${fullWhatsapp}` : null;
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "Africa/Cairo",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Free Trial Booking - Furqan Learn</title>
</head>
<body style="margin:0;padding:0;background-color:#F5F3EF;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#1A2530;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F5F3EF;padding:30px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px;background-color:#FFFFFF;border-radius:18px;overflow:hidden;box-shadow:0 12px 40px rgba(11,27,51,0.08);border:1px solid #E8DFCE;">
          
          <!-- Header Banner (Navy & Gold Accent) -->
          <tr>
            <td style="background: linear-gradient(135deg, #08332B 0%, #0E493E 100%);padding:36px 30px;text-align:center;border-bottom:3px solid #C9A24D;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-bottom:12px;">
                    <span style="display:inline-block;background-color:rgba(201,162,77,0.15);border:1px solid #C9A24D;color:#E8D18C;padding:5px 14px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
                      🌟 New Free Trial Application
                    </span>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <h1 style="margin:0;color:#FFFFFF;font-size:24px;font-weight:800;letter-spacing:-0.5px;font-family:Georgia,serif;">
                      Furqan Learn Academy
                    </h1>
                    <p style="margin:6px 0 0;color:#E8D18C;font-size:13px;font-weight:500;">
                      Official Online Quran & Islamic Studies Platform
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding:32px 30px;">
              <h2 style="margin:0 0 16px;color:#08332B;font-size:18px;font-weight:700;">
                Assalamu Alaikum Academic Team,
              </h2>
              <p style="margin:0 0 24px;color:#4A5568;font-size:14px;line-height:1.6;">
                A new student has just requested a <strong>Free 1-on-1 Trial Class</strong> through the academy website. Below are the full registration details:
              </p>

              <!-- Course Highlight Box -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, #FAF6EE 0%, #F5ECCE 100%);border:1px solid #D8BC79;border-left:4px solid #C9A24D;border-radius:12px;margin-bottom:24px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <div style="font-size:11px;font-weight:700;color:#8C661D;text-transform:uppercase;letter-spacing:0.5px;">Requested Course Track</div>
                    <div style="font-size:16px;font-weight:800;color:#08332B;margin-top:4px;">${data.courseTitle}</div>
                    ${data.courseTag ? `<span style="display:inline-block;margin-top:6px;background:#08332B;color:#E8D18C;font-size:10px;font-weight:700;padding:2px 8px;border-radius:6px;">${data.courseTag}</span>` : ""}
                  </td>
                </tr>
              </table>

              <!-- Student Details Table -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-bottom:24px;">
                <tr>
                  <td colspan="2" style="padding:8px 0 12px;border-bottom:2px solid #F0EAE1;font-size:14px;font-weight:800;color:#08332B;">
                    👤 Student & Contact Information
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;width:38%;">Student Full Name:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#08332B;font-size:13px;font-weight:700;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;">Email Address:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#08332B;font-size:13px;font-weight:600;">
                    <a href="mailto:${data.email}" style="color:#0E2A52;text-decoration:none;font-weight:700;">${data.email}</a>
                  </td>
                </tr>
                ${data.whatsappNumber ? `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;">WhatsApp Number:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#0E7C5E;font-size:13px;font-weight:800;font-family:monospace;">
                    ${data.countryDialCode || ""} ${data.whatsappNumber}
                  </td>
                </tr>
                ` : ""}
                ${data.country ? `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;">Country / Region:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#08332B;font-size:13px;font-weight:600;">${data.country}</td>
                </tr>
                ` : ""}
                ${data.age ? `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;">Student Age:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#08332B;font-size:13px;font-weight:600;">${data.age} Years Old</td>
                </tr>
                ` : ""}
                ${data.gender ? `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;">Student Gender:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#08332B;font-size:13px;font-weight:600;">${data.gender}</td>
                </tr>
                ` : ""}
                ${data.teacherPreference ? `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;">Teacher Preference:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#08332B;font-size:13px;font-weight:600;">${data.teacherPreference}</td>
                </tr>
                ` : ""}
                ${data.preferredDate || data.preferredTime ? `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;">Preferred Schedule:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#08332B;font-size:13px;font-weight:600;">
                    ${data.preferredDate || ""} ${data.preferredTime ? `at ${data.preferredTime}` : ""}
                  </td>
                </tr>
                ` : ""}
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;">Submission Source:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#08332B;font-size:13px;font-weight:600;">${data.source || "Website Home Page Form"}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;color:#718096;font-size:13px;">Time of Request:</td>
                  <td style="padding:10px 0;color:#08332B;font-size:12px;font-weight:600;">${submittedAt} (Cairo Time)</td>
                </tr>
              </table>

              <!-- Student Message / Special Notes -->
              ${data.message ? `
              <div style="background-color:#FAF9F6;border:1px dashed #D0C5B0;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
                <div style="font-size:11px;font-weight:700;color:#8C661D;text-transform:uppercase;margin-bottom:6px;">Student Message / Goals:</div>
                <div style="font-size:13px;color:#2D3748;line-height:1.6;font-style:italic;">"${data.message}"</div>
              </div>
              ` : ""}

              <!-- Action Buttons -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:20px;">
                <tr>
                  <td align="center" style="padding-bottom:12px;">
                    ${whatsappUrl ? `
                    <a href="${whatsappUrl}" target="_blank" style="display:inline-block;background-color:#25D366;color:#FFFFFF;padding:14px 28px;border-radius:30px;font-size:14px;font-weight:700;text-decoration:none;box-shadow:0 4px 15px rgba(37,211,102,0.35);margin:4px;">
                      💬 Open Direct WhatsApp Chat
                    </a>
                    ` : ""}
                    <a href="mailto:${data.email}?subject=Your%20Ruh%20Al-Quran%20Free%20Trial%20Class%20Confirmation" style="display:inline-block;background-color:#08332B;color:#E8D18C;padding:14px 24px;border-radius:30px;font-size:14px;font-weight:700;text-decoration:none;box-shadow:0 4px 15px rgba(11,27,51,0.25);margin:4px;border:1px solid #C9A24D;">
                      ✉️ Reply via Email
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#08332B;padding:24px 30px;text-align:center;border-top:1px solid #C9A24D;">
              <p style="margin:0;color:#E8D18C;font-size:12px;font-weight:600;">
                Furqan Learn Academy — Al-Azhar Academic Administration
              </p>
              <p style="margin:4px 0 0;color:#A0AEC0;font-size:11px;">
                Cairo, Egypt • Online Students Across 35+ Countries
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate plaintext for trial booking
 */
export function generateTrialEmailText(data: TrialBookingEmailData): string {
  const fullName = `${data.firstName} ${data.lastName}`.trim();
  return `
NEW FREE TRIAL BOOKING - FURQAN LEARN ACADEMY
==================================================

Student Name: ${fullName}
Email: ${data.email}
WhatsApp / Phone: ${data.countryDialCode || ""} ${data.whatsappNumber || "Not provided"}
Country: ${data.country || "Not specified"}
Student Age: ${data.age || "Not specified"}
Gender: ${data.gender || "Not specified"}
Teacher Preference: ${data.teacherPreference || "No Preference"}
Requested Course: ${data.courseTitle} (${data.courseTag || ""})
Preferred Schedule: ${data.preferredDate || ""} ${data.preferredTime || ""}
Source: ${data.source || "Home Page Free Trial Form"}

Message / Goals:
${data.message || "None"}

Date/Time: ${new Date().toISOString()}
==================================================
  `.trim();
}

/**
 * Generate luxury styled HTML for Contact Us Inquiry notification email
 */
export function generateContactEmailHtml(data: ContactInquiryEmailData): string {
  const cleanPhone = (data.phone || "").replace(/\D/g, "");
  const whatsappUrl = cleanPhone ? `https://wa.me/${cleanPhone}` : null;
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "Africa/Cairo",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Inquiry - Furqan Learn</title>
</head>
<body style="margin:0;padding:0;background-color:#F5F3EF;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#1A2530;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F5F3EF;padding:30px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px;background-color:#FFFFFF;border-radius:18px;overflow:hidden;box-shadow:0 12px 40px rgba(11,27,51,0.08);border:1px solid #E8DFCE;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #08332B 0%, #0E493E 100%);padding:36px 30px;text-align:center;border-bottom:3px solid #C9A24D;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-bottom:12px;">
                    <span style="display:inline-block;background-color:rgba(201,162,77,0.15);border:1px solid #C9A24D;color:#E8D18C;padding:5px 14px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
                      📬 New Contact Us Message
                    </span>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <h1 style="margin:0;color:#FFFFFF;font-size:24px;font-weight:800;letter-spacing:-0.5px;font-family:Georgia,serif;">
                      Furqan Learn Academy
                    </h1>
                    <p style="margin:6px 0 0;color:#E8D18C;font-size:13px;font-weight:500;">
                      Academic & Student Inquiries Desk
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding:32px 30px;">
              <h2 style="margin:0 0 16px;color:#08332B;font-size:18px;font-weight:700;">
                Assalamu Alaikum Academic Support,
              </h2>
              <p style="margin:0 0 24px;color:#4A5568;font-size:14px;line-height:1.6;">
                A new inquiry has been submitted via the <strong>Contact Us</strong> page:
              </p>

              <!-- Topic Box -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, #FAF6EE 0%, #F5ECCE 100%);border:1px solid #D8BC79;border-left:4px solid #C9A24D;border-radius:12px;margin-bottom:24px;">
                <tr>
                  <td style="padding:14px 18px;">
                    <div style="font-size:11px;font-weight:700;color:#8C661D;text-transform:uppercase;">Inquiry Topic</div>
                    <div style="font-size:16px;font-weight:800;color:#08332B;margin-top:3px;">${data.subject}</div>
                  </td>
                </tr>
              </table>

              <!-- Sender Info Table -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-bottom:24px;">
                <tr>
                  <td colspan="2" style="padding:8px 0 12px;border-bottom:2px solid #F0EAE1;font-size:14px;font-weight:800;color:#08332B;">
                    👤 Contact Details
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;width:38%;">Full Name:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#08332B;font-size:13px;font-weight:700;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;">Email Address:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#08332B;font-size:13px;font-weight:600;">
                    <a href="mailto:${data.email}" style="color:#0E2A52;text-decoration:none;font-weight:700;">${data.email}</a>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;">Phone / WhatsApp:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#0E7C5E;font-size:13px;font-weight:800;font-family:monospace;">
                    ${data.phone}
                  </td>
                </tr>
                ` : ""}
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#718096;font-size:13px;">Source:</td>
                  <td style="padding:10px 0;border-bottom:1px solid #F0EAE1;color:#08332B;font-size:13px;font-weight:600;">${data.source || "Contact Us Page"}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;color:#718096;font-size:13px;">Time Received:</td>
                  <td style="padding:10px 0;color:#08332B;font-size:12px;font-weight:600;">${submittedAt} (Cairo Time)</td>
                </tr>
              </table>

              <!-- Message Content -->
              <div style="background-color:#FAF9F6;border:1px solid #E2D9C8;border-radius:12px;padding:18px 20px;margin-bottom:24px;">
                <div style="font-size:11px;font-weight:700;color:#8C661D;text-transform:uppercase;margin-bottom:8px;">Message Content:</div>
                <div style="font-size:14px;color:#2D3748;line-height:1.65;white-space:pre-wrap;">${data.message}</div>
              </div>

              <!-- Quick Reply Actions -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:20px;">
                <tr>
                  <td align="center">
                    ${whatsappUrl ? `
                    <a href="${whatsappUrl}" target="_blank" style="display:inline-block;background-color:#25D366;color:#FFFFFF;padding:12px 24px;border-radius:30px;font-size:13px;font-weight:700;text-decoration:none;box-shadow:0 4px 15px rgba(37,211,102,0.3);margin:4px;">
                      💬 Chat on WhatsApp
                    </a>
                    ` : ""}
                    <a href="mailto:${data.email}?subject=Re:%20${encodeURIComponent(data.subject)}%20-%20Ruh%20Al-Quran" style="display:inline-block;background-color:#08332B;color:#E8D18C;padding:12px 24px;border-radius:30px;font-size:13px;font-weight:700;text-decoration:none;box-shadow:0 4px 15px rgba(11,27,51,0.25);margin:4px;border:1px solid #C9A24D;">
                      ✉️ Reply to ${data.name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#08332B;padding:24px 30px;text-align:center;border-top:1px solid #C9A24D;">
              <p style="margin:0;color:#E8D18C;font-size:12px;font-weight:600;">
                Furqan Learn Academy — Al-Azhar Academic Support
              </p>
              <p style="margin:4px 0 0;color:#A0AEC0;font-size:11px;">
                Cairo, Egypt • support@furqanlearn.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate plaintext for contact inquiry
 */
export function generateContactEmailText(data: ContactInquiryEmailData): string {
  return `
NEW CONTACT US INQUIRY - FURQAN LEARN ACADEMY
==================================================

Name: ${data.name}
Email: ${data.email}
Phone / WhatsApp: ${data.phone || "Not provided"}
Subject: ${data.subject}
Source: ${data.source || "Contact Us Page"}

Message:
${data.message}

Date/Time: ${new Date().toISOString()}
==================================================
  `.trim();
}
