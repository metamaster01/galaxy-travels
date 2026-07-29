"use client";

import { useState, type FormEvent } from "react";
import type { BookingPayload } from "@/types/booking";

const inputClasses =
  "w-full rounded-xl border border-night-border bg-white/[0.04] px-4 py-3 font-sans text-sm text-cream placeholder-cream/35 outline-none transition-colors focus:border-gold [color-scheme:dark]";

type Status = "idle" | "submitting" | "success" | "error";

export function BookingForm({ tripId, tripName }: { tripId: string; tripName: string }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const payload: BookingPayload = {
      tripId,
      tripName,
      fullName,
      phone,
      travelers: Number(travelers),
      preferredDate: preferredDate || undefined,
      message: message || undefined,
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Couldn't reach the server. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-night-border bg-night-card p-6 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-xl text-gold">
          ✓
        </span>
        <h3 className="mt-4 font-display text-lg font-medium text-cream">Request sent!</h3>
        <p className="mt-1.5 font-sans text-sm text-cream/60">
          Our team will call {phone || "you"} shortly to confirm your booking for {tripName}.
        </p>
      </div>
    );
  }

  return (
    <form
      id="book"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-night-border bg-night-card p-5 sm:p-6"
    >
      <div className="space-y-4">
        <label className="block">
          <span className="mb-1.5 block font-sans text-xs font-medium text-cream/70">Full Name</span>
          <input
            required
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={inputClasses}
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block font-sans text-xs font-medium text-cream/70">Phone Number</span>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClasses}
            placeholder="+91 98765 43210"
          />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="mb-1.5 block font-sans text-xs font-medium text-cream/70">
              No. of Travellers
            </span>
            <input
              required
              type="number"
              min={1}
              max={50}
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className={inputClasses}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block font-sans text-xs font-medium text-cream/70">
              Preferred Date
            </span>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className={inputClasses}
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-1.5 block font-sans text-xs font-medium text-cream/70">
            Message (Optional)
          </span>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClasses} resize-none`}
            placeholder="Anything we should know?"
          />
        </label>
      </div>

      {status === "error" && errorMessage && (
        <p className="mt-3 font-sans text-sm text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 w-full rounded-full bg-gold py-3.5 font-sans text-sm font-semibold text-night transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Reserve Now"}
      </button>
    </form>
  );
}