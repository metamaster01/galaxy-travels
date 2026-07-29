import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { BookingPayload } from "@/types/booking";

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
  let body: Partial<BookingPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const tripId = body.tripId?.trim() ?? "";
  const tripName = body.tripName?.trim() ?? "";
  const fullName = body.fullName?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const travelers = Number(body.travelers);
  const preferredDate = body.preferredDate?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!tripId || !tripName || !fullName || !phone) {
    return NextResponse.json(
      { error: "Trip, full name, and phone number are required." },
      { status: 400 }
    );
  }
  if (!Number.isFinite(travelers) || travelers < 1 || travelers > 50) {
    return NextResponse.json(
      { error: "Number of travellers must be between 1 and 50." },
      { status: 400 }
    );
  }
  if (fullName.length > 120 || message.length > 2000) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const FROM_EMAIL = process.env.ENQUIRY_FROM_EMAIL ?? "Galaxy Travels <enquiries@yourdomain.com>";

  if (!RESEND_API_KEY || !ADMIN_EMAIL) {
    console.error(
      "Booking route is missing RESEND_API_KEY or ADMIN_EMAIL — check your .env.local / hosting env vars."
    );
    return NextResponse.json(
      { error: "The booking form isn't fully configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const html = `
    <div style="font-family: sans-serif; font-size: 14px; color: #16140f;">
      <h2 style="margin-bottom: 4px;">New trip booking request — Galaxy Travels</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
        <tr><td><strong>Trip</strong></td><td>${escapeHtml(tripName)} (${escapeHtml(tripId)})</td></tr>
        <tr><td><strong>Full name</strong></td><td>${escapeHtml(fullName)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>Travellers</strong></td><td>${travelers}</td></tr>
        <tr><td><strong>Preferred date</strong></td><td>${escapeHtml(preferredDate || "Not specified")}</td></tr>
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
      subject: `New booking request: ${tripName} — ${fullName}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send the booking request." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending booking request:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}