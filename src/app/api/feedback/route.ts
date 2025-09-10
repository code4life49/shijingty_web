import { NextRequest, NextResponse } from "next/server";

// NOTE: Replace this with your mail transport (e.g., Resend, Nodemailer with SMTP, or a third-party API)
// For security, configure environment variables in Vercel or your runtime:
// - EMAIL_TO: destination mailbox
// - EMAIL_FROM: sender mailbox (if SMTP)
// - SMTP_* or RESEND_API_KEY, etc.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, type, product, message, consent } = body ?? {};

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    // Basic anti-abuse
    if (message.length > 5000) {
      return NextResponse.json({ error: "Message too long" }, { status: 413 });
    }

    const to = process.env.EMAIL_TO;
    if (!to) {
      return NextResponse.json({ error: "Email not configured" }, { status: 500 });
    }

    // Build email content
    const subject = `Feedback: ${type || "General"}${product ? ` · ${product}` : ""}`;
    const content = [`Type: ${type || "N/A"}`, `Product: ${product || "N/A"}`, `From: ${name || "Anonymous"}${email ? ` <${email}>` : ""}`, `Consent: ${consent ? "Yes" : "No"}`, "", message].join("\n");

    // TODO: integrate your email service here. This placeholder logs only.
    console.log("[feedback] would send mail to:", to, { subject, content });

    // Example placeholder success
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/feedback error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
