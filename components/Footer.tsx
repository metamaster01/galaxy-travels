import { Globe, Star } from "lucide-react";

const QUICK_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const TRAVEL_TOOLS = [
  { label: "Travel Insurance", href: "/travel-insurance" },
  { label: "Sitemap", href: "/sitemap" },
];

// Swap for real social profile links + matching icons (Instagram, Facebook, X…)
// when those are ready — kept as-is here to match the current design exactly.
const SOCIAL_LINKS = [
  { label: "Our website", href: "https://galaxytravels.com", icon: Globe },
  { label: "Reviews", href: "#reviews", icon: Star },
];

export function Footer() {
  return (
    <footer className="border-t border-night-border bg-night px-4 pt-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 pb-10 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-xl font-medium text-gold">Galaxy Travels</p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-cream/55">
              Crafting extraordinary journeys for the modern adventurer. Premium boutique travel
              experiences since 2009.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 sm:gap-x-14">
            <div>
              <p className="font-sans text-sm font-semibold text-cream">Quick Links</p>
              <ul className="mt-4 space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-cream/55 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-sans text-sm font-semibold text-cream">Travel Tools</p>
              <ul className="mt-4 space-y-2.5">
                {TRAVEL_TOOLS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-cream/55 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-sans text-sm font-semibold text-cream">Follow Us</p>
              <div className="mt-4 flex gap-2.5">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-night-border-strong text-cream/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-night-border py-6 text-center font-sans text-xs text-cream/40 sm:flex-row sm:justify-between sm:text-left">
          <p>&copy; {new Date().getFullYear()} <a href="https://metamaster.in" className="text-gold hover:underline">
            Meta Master
          </a>. All rights reserved.</p>
          <p>Delhi, India.</p>
        </div>
      </div>
    </footer>
  );
}