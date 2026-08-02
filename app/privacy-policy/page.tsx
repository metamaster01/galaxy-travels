import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Galaxy Travels",
  description: "How Galaxy Travels collects, uses, and protects your information.",
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

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-night px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Legal
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium text-cream sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 font-sans text-sm text-cream/50">Last updated: August 2, 2026</p>

        <p className="mt-6 font-sans text-sm leading-relaxed text-cream/65">
          Galaxy Travels (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) respects your
          privacy. This policy explains what information we collect when you use this website,
          how we use it, and the choices you have.
        </p>

        <Section title="1. Information We Collect">
          <p>We collect information you provide directly to us through:</p>
          <List
            items={[
              "The enquiry form (\"Plan Your Dream Trip Today\") — full name, phone number, preferred destination, travel date, estimated budget, and any message you include.",
              "The booking form on a trip page (\"Reserve Now\") — full name, phone number, number of travellers, preferred date, and any message you include.",
            ]}
          />
          <p>
            We do not currently collect payment information through this website — bookings are
            confirmed and paid for offline, over phone or email, after our team follows up on your
            request.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <List
            items={[
              "To respond to your enquiry or booking request, including by phone, email, or WhatsApp.",
              "To prepare a tailored trip quote or itinerary.",
              "To send you information you've requested about a specific trip or offer.",
              "To improve our trips and this website based on the enquiries we receive.",
            ]}
          />
          <p>We do not use your information for automated decision-making or profiling.</p>
        </Section>

        <Section title="3. How Your Information Is Sent to Us">
          <p>
            When you submit the enquiry or booking form, the details are sent directly to our
            team&rsquo;s inbox using{" "}
            <a href="https://resend.com" className="text-gold underline underline-offset-2">
              Resend
            </a>
            , a transactional email delivery service. Resend processes this data solely to
            deliver the email and does not use it for any other purpose. We do not store form
            submissions in a separate database beyond the email itself.
          </p>
        </Section>

        <Section title="4. Sharing Your Information">
          <p>
            We do not sell, rent, or trade your personal information. We only share it with:
          </p>
          <List
            items={[
              "Service providers who help us operate this website and deliver enquiry/booking emails (currently, Resend).",
              "Local operators, guides, or accommodation partners directly involved in fulfilling a trip you've booked with us.",
              "Authorities, where required by law.",
            ]}
          />
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain enquiry and booking details for as long as reasonably necessary to respond
            to your request, fulfil a booking, and maintain records for accounting and legal
            purposes. You can ask us to delete your information at any time (see Section 8).
          </p>
        </Section>

        <Section title="6. Cookies & Analytics">
          <p>
            This website does not currently set tracking or advertising cookies. If we add
            analytics tools in the future, we will update this policy to describe what&rsquo;s
            collected and how to opt out.
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>
            Several of our trips have a minimum age requirement, listed on each trip&rsquo;s page.
            This website is not directed at children, and we do not knowingly collect personal
            information from anyone under 13 without a parent or guardian submitting the enquiry
            on their behalf.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>
            You can ask us to access, correct, or delete the personal information we hold about
            you by emailing{" "}
            <a href="mailto:travel@galaxytravels.com" className="text-gold underline underline-offset-2">
              travel@galaxytravels.com
            </a>
            . We&rsquo;ll respond within a reasonable time.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this policy from time to time. The &ldquo;Last updated&rdquo; date
            above reflects the most recent revision. Continued use of this website after a change
            means you accept the updated policy.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>
            Questions about this policy or your data? Reach us at{" "}
            <a href="mailto:travel@galaxytravels.com" className="text-gold underline underline-offset-2">
              travel@galaxytravels.com
            </a>{" "}
            or +1 (800) 123-4567.
          </p>
        </Section>

        <p className="mt-12 rounded-2xl border border-night-border bg-night-card p-5 font-sans text-xs leading-relaxed text-cream/45">
          This is a starting-point template written for how this specific site currently works
          (the forms it has, and Resend as the only third party involved). It isn&rsquo;t legal
          advice — please have a lawyer review it before publishing, especially once you add
          payments, analytics, or other data collection.
        </p>
      </div>
    </main>
  );
}