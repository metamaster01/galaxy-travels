"use client";

import { useState, type FormEvent } from "react";
import { BUDGET_RANGES, type EnquiryPayload } from "@/types/Enquiry";

const inputClasses =
  "w-full rounded-xl border border-night-border bg-white/[0.04] px-4 py-3 font-sans text-sm text-cream placeholder-cream/35 outline-none transition-colors focus:border-gold";

const initialForm: EnquiryPayload = {
  fullName: "",
  phone: "",
  destination: "",
  travelDate: "",
  budget: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm() {
  const [form, setForm] = useState<EnquiryPayload>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function update<K extends keyof EnquiryPayload>(key: K, value: EnquiryPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setErrorMessage("Couldn't reach the server. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-night-border bg-night-card p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-2xl text-gold">
          ✓
        </span>
        <h3 className="mt-5 font-display text-xl font-medium text-cream">
          Thanks, {form.fullName || "we've got it"}!
        </h3>
        <p className="mt-2 max-w-xs font-sans text-sm text-cream/60">
          Our team will reach out with a tailored quote within 2 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-sans text-sm font-semibold text-gold hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-night-border bg-night-card p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-sans text-xs font-medium text-cream/70">Full Name</span>
          <input
            required
            type="text"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className={inputClasses}
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block font-sans text-xs font-medium text-cream/70">Phone Number</span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClasses}
            placeholder="+1 234 567 890"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block font-sans text-xs font-medium text-cream/70">
            Preferred Destination
          </span>
          <input
            required
            type="text"
            value={form.destination}
            onChange={(e) => update("destination", e.target.value)}
            className={inputClasses}
            placeholder="e.g. Bali, Dubai, Maldives"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block font-sans text-xs font-medium text-cream/70">Travel Date</span>
          <input
            type="date"
            value={form.travelDate}
            onChange={(e) => update("travelDate", e.target.value)}
            className={`${inputClasses} [color-scheme:dark]`}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-1.5 block font-sans text-xs font-medium text-cream/70">
            Estimated Budget
          </span>
          <select
            value={form.budget}
            onChange={(e) => update("budget", e.target.value as EnquiryPayload["budget"])}
            className={`${inputClasses} appearance-none`}
          >
            <option value="" className="bg-night">
              Select Range
            </option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range} className="bg-night">
                {range}
              </option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-1.5 block font-sans text-xs font-medium text-cream/70">
            Message (Optional)
          </span>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className={`${inputClasses} resize-none`}
            placeholder="Tell us a bit about the trip you're picturing..."
          />
        </label>
      </div>

      {status === "error" && errorMessage && (
        <p className="mt-4 font-sans text-sm text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-gold py-3.5 font-sans text-sm font-semibold text-night transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Quote"}
      </button>
    </form>
  );
}