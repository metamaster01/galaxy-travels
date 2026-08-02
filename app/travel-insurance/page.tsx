import type { Metadata } from "next";
import { ShieldAlert, HeartPulse, PackageX, CalendarX, Phone } from "lucide-react";
import { TRIPS } from "@/data/trips";

export const metadata: Metadata = {
  title: "Travel Insurance — Galaxy Travels",
  description: "Why travel insurance matters for high-altitude and adventure trips, and what to look for.",
};

const WHY_IT_MATTERS = [
  {
    icon: HeartPulse,
    title: "Medical emergencies & evacuation",
    description:
      "Several of our trips reach 12,000+ ft, where altitude sickness is a real risk and the nearest hospital can be hours away. Emergency evacuation by helicopter or vehicle is expensive without cover.",
  },
  {
    icon: CalendarX,
    title: "Trip cancellation or curtailment",
    description:
      "Illness, a family emergency, or a missed connecting flight can force you to cancel or cut a trip short. Insurance can recover costs our own cancellation policy doesn't cover.",
  },
  {
    icon: PackageX,
    title: "Baggage loss or delay",
    description:
      "Gear, riding equipment, and personal items lost or delayed in transit — especially relevant on our multi-city and flight-inclusive itineraries.",
  },
  {
    icon: ShieldAlert,
    title: "Adventure activity cover",
    description:
      "Standard travel policies often exclude trekking above a certain altitude, biking, rafting, or scuba diving. Our trips include exactly these activities, so a standard policy may not be enough.",
  },
];

const WHAT_TO_LOOK_FOR = [
  "Coverage for trekking/high-altitude activity up to at least 15,000 ft (Chandrataal, Kedarkantha, and Ladakh routes reach this range)",
  "An adventure sports or activity rider covering biking, rafting, or scuba diving if your trip includes one",
  "Emergency medical treatment and evacuation, including helicopter rescue where applicable",
  "Trip cancellation, curtailment, and delay cover",
  "A 24/7 emergency assistance helpline you can reach from remote areas",
  "Coverage dates that fully span your travel dates, including any buffer days for weather delays",
];

export default function TravelInsurancePage() {
  const highRiskTrips = TRIPS.filter((trip) => trip.difficulty === "Challenging");

  return (
    <main className="bg-night px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-4xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Travel Tools
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium text-cream sm:text-4xl">
          Travel Insurance
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-cream/65">
          Travel insurance isn't included in any Galaxy Travels package — you'll see it listed
          under &ldquo;Exclusions&rdquo; on every trip page. That's deliberate: the right policy
          depends on your health, your existing cover, and the specific trip you're taking, so we
          leave that choice to you and a licensed insurer. Here's what to think about before you
          book.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {WHY_IT_MATTERS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-night-border bg-night-card p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-medium text-cream">{item.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-cream/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-display text-xl font-medium text-cream">
            What to Look For in a Policy
          </h2>
          <ul className="mt-5 space-y-2.5">
            {WHAT_TO_LOOK_FOR.map((item) => (
              <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-cream/70">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {highRiskTrips.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-xl font-medium text-cream">
              Trips Where We'd Especially Recommend Cover
            </h2>
            <p className="mt-2 max-w-2xl font-sans text-sm text-cream/55">
              These are rated &ldquo;Challenging&rdquo; on our difficulty scale — high altitude,
              demanding terrain, or both.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highRiskTrips.map((trip) => (
                <a
                  key={trip.id}
                  href={`/trips/${trip.id}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-night-border bg-night-card px-4 py-3 transition-colors hover:border-night-border-strong"
                >
                  <div>
                    <p className="font-sans text-sm font-medium text-cream">{trip.name}</p>
                    <p className="mt-0.5 font-sans text-xs text-cream/45">{trip.state}</p>
                  </div>
                  <span className="shrink-0 font-sans text-xs text-gold">View trip →</span>
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14 rounded-2xl border border-night-border bg-night-card p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-lg font-medium text-cream">
                Not sure what cover you need?
              </h2>
              <p className="mt-1.5 max-w-md font-sans text-sm text-cream/60">
                Tell our team which trip you're considering and we'll flag anything specific to
                watch out for in a policy.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 font-sans text-sm font-semibold text-night transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" />
              Talk to Our Team
            </a>
          </div>
        </section>

        <p className="mt-10 font-sans text-xs leading-relaxed text-cream/40">
          Galaxy Travels does not sell or underwrite travel insurance and isn't affiliated with
          any specific insurer. This page is general guidance only — please review policy wording
          with a licensed insurance provider before you buy, and confirm altitude and activity
          limits against your actual itinerary.
        </p>
      </div>
    </main>
  );
}