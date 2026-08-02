import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Galaxy Travels",
  description: "The terms that govern using this website and booking a trip with Galaxy Travels.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-medium text-cream">{title}</h2>
      <div className="mt-3 space-y-3 font-sans text-sm leading-relaxed text-cream/65">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TermsOfServicePage() {
  return (
    <main className="bg-night px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Legal
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium text-cream sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 font-sans text-sm text-cream/50">Last updated: August 2, 2026</p>

        <p className="mt-6 font-sans text-sm leading-relaxed text-cream/65">
          These terms govern your use of this website and any trip you book through Galaxy
          Travels. By submitting an enquiry or booking request, you agree to the terms below, in
          addition to the specific terms listed on the trip you're booking.
        </p>

        <Section title="1. About Galaxy Travels">
          <p>
            Galaxy Travels curates and operates domestic travel experiences across India —
            treks, road trips, pilgrimages, beach getaways, and group tours. Each trip page
            includes its own overview, itinerary, inclusions/exclusions, and terms specific to
            that trip; where those specific terms differ from this general policy, the
            trip-specific terms apply.
          </p>
        </Section>

        <Section title="2. Enquiries & Bookings Are Requests, Not Confirmations">
          <p>
            Submitting the enquiry form or the &ldquo;Reserve Now&rdquo; form on a trip page
            sends a request to our team — it does not confirm your seat on a trip. A booking is
            only confirmed once our team has contacted you and received the required advance
            payment, communicated separately (currently, this website does not process payments
            directly).
          </p>
        </Section>

        <Section title="3. Pricing">
          <List
            items={[
              "All prices shown are in Indian Rupees (₹) and quoted per person, on a twin/triple-sharing basis unless the trip states otherwise.",
              "Prices are subject to change based on season, availability, and government-mandated fees at the time of booking, until confirmed in writing.",
              "Discounted prices and offer countdowns reflect current promotions and may end or change without prior notice.",
            ]}
          />
        </Section>

        <Section title="4. Advance Payment & Cancellations">
          <p>
            Most trips require a non-refundable advance to confirm your booking, with the exact
            amount listed in that trip&rsquo;s Terms tab. Cancellation fees generally scale with
            how close to departure you cancel (for example, a smaller fee 3+ weeks out, rising to
            50–100% of the trip cost inside the final week) — the exact tiers for your trip are
            listed on its own page. Please check them before booking.
          </p>
        </Section>

        <Section title="5. Itinerary Changes">
          <p>
            Weather, road conditions, permit availability, and traveller safety can require us to
            change a route, activity, or overnight stay with little notice — particularly on
            high-altitude, trekking, and monsoon-season trips. Where this happens, we aim to
            substitute an experience of equivalent value. The trip captain or trek leader&rsquo;s
            decisions on the ground (including whether to proceed with a summit push, river
            crossing, or pass crossing) are final for the safety of the group.
          </p>
        </Section>

        <Section title="6. Traveller Responsibilities">
          <List
            items={[
              "Carry a valid government-issued photo ID on every trip (mandatory for permits, houseboat/hotel check-in, and restricted-area travel like Ladakh, Kashmir, and parts of the Northeast).",
              "Meet the minimum age requirement listed on the trip you're booking; some trips also have a maximum age or require a signed fitness declaration.",
              "Disclose relevant medical conditions in advance, especially for high-altitude, trekking, or diving-adjacent trips.",
              "Follow the trip captain's or guide's safety instructions throughout the trip.",
              "Arrive at the stated meeting point on time — we're not able to hold departures for late arrivals.",
            ]}
          />
        </Section>

        <Section title="7. Health, Safety & Travel Insurance">
          <p>
            Several trips involve genuine physical risk — high-altitude sickness, trekking
            terrain, water activities, or remote locations with limited medical access. You are
            responsible for assessing your own fitness for a trip and consulting a doctor where a
            trip page recommends it (for example, before taking Diamox for altitude). Travel and
            medical insurance is not included in any package price; we strongly recommend you
            arrange your own before departure.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            Galaxy Travels arranges transport, accommodation, permits, and guiding services
            through third-party operators and partners. While we vet our partners carefully, we
            are not liable for delays, losses, injury, or costs arising from circumstances outside
            our reasonable control, including third-party service failures, weather, natural
            disasters, civil unrest, or government action.
          </p>
        </Section>

        <Section title="9. Force Majeure">
          <p>
            We are not responsible for a trip's delay, modification, or cancellation caused by
            events beyond our reasonable control — natural disasters, extreme weather,
            landslides, road/route closures, government restrictions, strikes, or pandemics. In
            such cases, we'll work with you in good faith on rescheduling or a partial credit
            where possible, but a full refund is not guaranteed.
          </p>
        </Section>

        <Section title="10. Governing Law">
          <p>
            These terms are governed by the laws of India. Any disputes will be subject to the
            exclusive jurisdiction of the courts local to Galaxy Travels' registered place of
            business.
          </p>
        </Section>

        <Section title="11. Changes to These Terms">
          <p>
            We may update these terms from time to time; the &ldquo;Last updated&rdquo; date
            above reflects the latest revision. Terms specific to a trip you've already booked
            and paid an advance for will not be changed retroactively to your disadvantage.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p>
            Questions about these terms or an existing booking? Reach us at{" "}
            <a href="mailto:travel@galaxytravels.com" className="text-gold underline underline-offset-2">
              travel@galaxytravels.com
            </a>{" "}
            or +1 (800) 123-4567.
          </p>
        </Section>

        <p className="mt-12 rounded-2xl border border-night-border bg-night-card p-5 font-sans text-xs leading-relaxed text-cream/45">
          This is a starting-point template based on the cancellation, safety, and pricing
          patterns already in your trip data. It isn&rsquo;t legal advice — please have a lawyer
          review it before publishing, particularly the liability, insurance, and governing-law
          sections, which should reflect your actual business registration and insurance
          arrangements.
        </p>
      </div>
    </main>
  );
}