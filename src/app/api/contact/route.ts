import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, category, subject, message, website_hp } = body;

    // 1. Anti-spam Honeypot Check
    if (website_hp) {
      return NextResponse.json({ success: true, message: 'Inquiry processed.' }, { status: 200 });
    }

    // 2. Field Validations
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all required fields (Name, Email, Subject, and Message).' },
        { status: 400 }
      );
    }

    // 3. Target Recipient Email
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'barathvr385@gmail.com';
    const cleanPhone = phone ? phone.replace(/[^0-9+]/g, '') : '';
    const whatsappUrl = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}` : '';

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Method A: Custom SMTP Credentials (if configured in environment)
    if (smtpUser && smtpPass) {
      const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
      const smtpPort = Number(process.env.SMTP_PORT) || 465;

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #121212; color: #f4f4f4; border: 1px solid #d4af37; border-radius: 12px; padding: 24px;">
          <div style="text-align: center; border-bottom: 1px solid #333; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #ffb800; margin: 0; font-size: 22px;">Tamil Nadu State Kudo Association</h2>
            <p style="color: #aaa; font-size: 13px; margin-top: 4px;">New Public Website Inquiry / Feedback</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr><td style="padding: 8px 0; color: #d4af37; font-weight: bold; width: 140px;">Sender Name:</td><td style="padding: 8px 0; color: #ffffff;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #d4af37; font-weight: bold;">Email Address:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #d4af37; font-weight: bold;">WhatsApp / Phone:</td><td style="padding: 8px 0; color: #ffffff;">${phone ? `${phone} ${whatsappUrl ? `(<a href="${whatsappUrl}" target="_blank" style="color: #34d399;">Open WhatsApp Chat</a>)` : ''}` : 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #d4af37; font-weight: bold;">Category:</td><td style="padding: 8px 0;"><span style="background-color: #d4af37; color: #000; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">${category || 'General Inquiry'}</span></td></tr>
            <tr><td style="padding: 8px 0; color: #d4af37; font-weight: bold;">Subject:</td><td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${subject}</td></tr>
          </table>
          <div style="background-color: #1e1e1e; border-left: 4px solid #ffb800; padding: 16px; border-radius: 6px; margin-top: 12px;">
            <h4 style="color: #ffb800; margin-top: 0; margin-bottom: 8px; font-size: 14px;">Message Content:</h4>
            <p style="color: #e5e7eb; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <div style="border-top: 1px solid #333; margin-top: 24px; padding-top: 12px; font-size: 11px; color: #777; text-align: center;">
            Sent automatically via TNSKA Official Portal • Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </div>
        </div>
      `;

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass }
      });

      await transporter.sendMail({
        from: `"TNSKA Portal" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `[TNSKA Inquiry - ${category || 'General'}] ${subject}`,
        html: htmlContent
      });

      console.log(`[TNSKA Inquiry API] SMTP Email sent to ${recipientEmail}`);
    } else {
      // Method B: Free Direct Delivery via FormSubmit API (No SMTP Password Required)
      console.log(`[TNSKA Inquiry API] Dispatching live email via FormSubmit service to ${recipientEmail}...`);

      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[TNSKA Inquiry - ${category || 'General'}] ${subject}`,
          _template: 'table',
          "Sender Name": name,
          "Sender Email": email,
          "WhatsApp / Phone": phone ? `${phone} (Chat: ${whatsappUrl})` : 'Not provided',
          "Inquiry Category": category || 'General Inquiry',
          "Subject": subject,
          "Message": message,
          "_captcha": "false"
        })
      });

      const fsData = await formSubmitRes.json();
      console.log(`[FormSubmit Response]:`, fsData);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been submitted successfully! Secretariat will respond shortly.'
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[TNSKA Inquiry API Error]:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
