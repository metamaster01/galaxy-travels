import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { EnquiryPayload } from "@/types/Enquiry";
import { BUDGET_RANGES } from "@/types/Enquiry";

// Force Node runtime — the Resend SDK isn't built for the edge runtime.
export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Partial<EnquiryPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = body.fullName?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const destination = body.destination?.trim() ?? "";
  const travelDate = body.travelDate?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  // Server-side validation — never trust the client, even for a marketing form.
  if (!fullName || !phone || !destination) {
    return NextResponse.json(
      { error: "Full name, phone number, and preferred destination are required." },
      { status: 400 }
    );
  }
  if (fullName.length > 120 || destination.length > 160 || message.length > 2000) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }
  if (budget && !BUDGET_RANGES.includes(budget as (typeof BUDGET_RANGES)[number])) {
    return NextResponse.json({ error: "Invalid budget range." }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  // Must be an address on a domain verified in your Resend account.
  const FROM_EMAIL = process.env.ENQUIRY_FROM_EMAIL ?? "Galaxy Travels <enquiries@yourdomain.com>";

  if (!RESEND_API_KEY || !ADMIN_EMAIL) {
    console.error(
      "Enquiry route is missing RESEND_API_KEY or ADMIN_EMAIL — check your .env.local / hosting env vars."
    );
    return NextResponse.json(
      { error: "The enquiry form isn't fully configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const html = `
    <div style="font-family: sans-serif; font-size: 14px; color: #16140f;">
      <h2 style="margin-bottom: 4px;">New trip enquiry — Galaxy Travels</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        <tr><td><strong>Full name</strong></td><td>${escapeHtml(fullName)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>Preferred destination</strong></td><td>${escapeHtml(destination)}</td></tr>
        <tr><td><strong>Travel date</strong></td><td>${escapeHtml(travelDate || "Not specified")}</td></tr>
        <tr><td><strong>Estimated budget</strong></td><td>${escapeHtml(budget || "Not specified")}</td></tr>
      </table>
      ${
        message
          ? `<p style="margin-top: 16px;"><strong>Message</strong></p><p style="white-space: pre-wrap;">${escapeHtml(message)}</p>`
          : ""
      }
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New enquiry: ${fullName} — ${destination}`,
      html,
      // No email field is collected on the form (per the current design), so
      // there's no reply-to to set. Add an email input + `replyTo` here if
      // you'd like the admin to be able to hit "reply" directly.
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send the enquiry email." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending enquiry:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}