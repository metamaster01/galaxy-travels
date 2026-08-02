"use client";

import { motion } from "framer-motion";
import { ImageCollage } from "./ImageCollage";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.5 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
  },
};

const STATS = [
  { icon: "★", label: "4.7 stars (5k Reviews)" },
  { icon: "◐", label: "5k travellers" },
  { icon: "◎", label: "10k+ followers" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[62vh] min-h-[440px] w-full overflow-hidden md:h-[100svh]"
    >
      <ImageCollage />

      {/* Legibility gradient — forest, not generic black, ties the overlay to the brand */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/25 to-forest/35" />
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-8 text-center sm:px-6 md:justify-center md:pb-0"
      >
        <motion.p
          variants={rise}
          className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/80 sm:mb-4 sm:text-xs"
        >
          For those who seek more
        </motion.p>

        <motion.h1 className="max-w-4xl font-display text-[clamp(2.1rem,7vw,5rem)] leading-[1.05] text-cream">
          <motion.span variants={rise} className="block font-medium">
            Luxury Journeys
          </motion.span>
          <motion.span variants={rise} className="block italic text-gold">
            without limits
          </motion.span>
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-4 max-w-md font-sans text-sm text-cream/85 sm:mt-5 sm:text-base"
        >
          Curated journeys designed to be felt, not rushed.
        </motion.p>

        <motion.a
          variants={rise}
          href="#destinations"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 font-sans text-sm font-semibold text-forest shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98] sm:mt-8"
        >
          Book a trip
          <span aria-hidden="true" className="text-base">
            ↗
          </span>
        </motion.a>

        <motion.div
          variants={rise}
          className="mt-8 hidden flex-wrap items-center justify-center gap-x-8 gap-y-2 font-sans text-sm text-cream/90 sm:mt-10 md:flex"
        >
          {STATS.map((stat) => (
            <span key={stat.label} className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="text-gold">
                {stat.icon}
              </span>
              {stat.label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}