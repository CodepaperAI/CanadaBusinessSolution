import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const phonePattern = /^[0-9+()\-\s]{10,20}$/;

const businessTypeOptions = [
  "Not Started Yet",
  "Just Starting",
  "Already Operating",
  "Other",
] as const;

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(10).max(20).regex(phonePattern),
  businessType: z.enum(businessTypeOptions),
  message: z.string().trim().min(20).max(1000),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(values: z.infer<typeof contactSchema>) {
  const messageHtml = escapeHtml(values.message).replace(/\n/g, "<br />");
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color:#0d1b3a; line-height:1.6;">
      <h2 style="margin:0 0 16px;font-size:20px;">New consultation request</h2>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px 0;font-weight:600;width:140px;">Name</td><td>${escapeHtml(values.fullName)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;">Email</td><td>${escapeHtml(values.email)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;">Phone</td><td>${escapeHtml(values.phone)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:600;">Business stage</td><td>${escapeHtml(values.businessType)}</td></tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#f5f5f0;border-radius:12px;">
        <div style="font-weight:600;margin-bottom:8px;">Message</div>
        <div>${messageHtml}</div>
      </div>
      <p style="margin-top:24px;font-size:12px;color:#6b7280;">
        Sent from canadabusinesssolutions.ca contact form.
      </p>
    </div>
  `;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const values = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: `Canada Business Solutions <${fromEmail}>`,
      to: [toEmail],
      replyTo: values.email,
      subject: `New consultation request — ${values.fullName}`,
      html: buildEmailHtml(values),
    });

    if (result.error) {
      console.error("Resend send error", result.error);
      return NextResponse.json(
        { ok: false, error: "Could not send the message right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form unhandled error", error);
    return NextResponse.json(
      { ok: false, error: "Could not send the message right now." },
      { status: 500 },
    );
  }
}
