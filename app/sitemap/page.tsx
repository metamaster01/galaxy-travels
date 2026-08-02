import type { Metadata } from "next";
import { TRIPS } from "@/data/trips";
import type { Trip } from "@/types/trip";

export const metadata: Metadata = {
  title: "Sitemap — Galaxy Travels",
  description: "Every page on the Galaxy Travels website, in one place.",
};

const MAIN_PAGES = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Travel Insurance", href: "/travel-insurance" },
];

const HOMEPAGE_SECTIONS = [
  { label: "Featured Trips", href: "/#destinations" },
  { label: "Flash Offers", href: "/#offers" },
  { label: "Traveler Reviews", href: "/#reviews" },
  { label: "Plan Your Trip / Contact", href: "/#contact" },
];

function groupByState(trips: Trip[]) {
  const groups = new Map<string, Trip[]>();
  for (const trip of trips) {
    const list = groups.get(trip.state) ?? [];
    list.push(trip);
    groups.set(trip.state, list);
  }
  return Array.from(groups.entries()).sort(([a], [b]) => a.localeCompare(b));
}

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="font-sans text-sm text-cream/70 transition-colors hover:text-gold"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function SitemapPage() {
  const tripsByState = groupByState(TRIPS);

  return (
    <main className="bg-night px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Travel Tools
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium text-cream sm:text-4xl">Sitemap</h1>
        <p className="mt-3 max-w-xl font-sans text-sm text-cream/55">
          Every page on this site, in one place — including a direct link to each of our{" "}
          {TRIPS.length} trips.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-lg font-medium text-cream">Main Pages</h2>
            <div className="mt-4">
              <LinkList items={MAIN_PAGES} />
            </div>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium text-cream">Homepage Sections</h2>
            <div className="mt-4">
              <LinkList items={HOMEPAGE_SECTIONS} />
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-lg font-medium text-cream">
            All Trips, by State
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tripsByState.map(([state, trips]) => (
              <div key={state}>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-wide text-cream/45">
                  {state}
                </h3>
                <div className="mt-3">
                  <LinkList
                    items={trips.map((trip) => ({
                      label: trip.name,
                      href: `/trips/${trip.id}`,
                    }))}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}