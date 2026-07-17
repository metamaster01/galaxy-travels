"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon } from "./icons/WhatsappIcon";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Offers", href: "#offers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_NUMBER = "10000000000"; // TODO: replace with the real number
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Galaxy Travels, I'd like to plan a trip."
)}`;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-black/5 bg-cream/90 px-3 py-2.5 shadow-nav backdrop-blur-md sm:px-4"
        aria-label="Primary"
      >
        {/* Desktop links (left) */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 font-sans text-sm font-medium text-forest/80 transition-colors hover:bg-forest/[0.06] hover:text-forest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo (center) */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2 px-1 font-display text-lg tracking-tight text-forest sm:text-xl"
        >
          <span aria-hidden="true" className="text-gold">
            ✦
          </span>
          <span>
            Galaxy <span className="italic text-gold">Travels</span>
          </span>
        </a>

        {/* Desktop links (right) + WhatsApp CTA */}
        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.slice(3).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 font-sans text-sm font-medium text-forest/80 transition-colors hover:bg-forest/[0.06] hover:text-forest"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>Connect us</span>
          </a>
        </div>

        {/* Mobile: WhatsApp icon + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white shadow-sm"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          >
            <motion.span
              animate={open ? "open" : "closed"}
              className="relative block h-4 w-5"
            >
              <motion.span
                variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }}
                className="absolute left-0 top-0 h-[2px] w-5 origin-center bg-forest"
              />
              <motion.span
                variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                className="absolute left-0 top-[7px] h-[2px] w-5 bg-forest"
              />
              <motion.span
                variants={{ closed: { rotate: 0, y: 14 }, open: { rotate: -45, y: 7 } }}
                className="absolute left-0 top-0 h-[2px] w-5 origin-center bg-forest"
              />
            </motion.span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-black/5 bg-cream/95 shadow-nav backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col p-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-sans text-base font-medium text-forest/85 transition-colors hover:bg-forest/[0.06] hover:text-forest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}