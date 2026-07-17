"use client";

import { motion } from "framer-motion";
import { ShieldCheck, LayoutGrid, Headphones, Award, type LucideIcon } from "lucide-react";

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
}

const REASONS: Reason[] = [
  {
    icon: ShieldCheck,
    title: "Best Price Guarantee",
    description:
      "Luxury doesn't always have to break the bank. We offer the most competitive rates for high-end travel.",
  },
  {
    icon: LayoutGrid,
    title: "Customized Packages",
    description:
      "Every traveler is unique. We tailor every itinerary to fit your specific dreams and requirements.",
  },
  {
    icon: Headphones,
    title: "24/7 Assistance",
    description:
      "Travel with peace of mind. Our global support team is available round the clock for your needs.",
  },
  {
    icon: Award,
    title: "Trusted Experts",
    description:
      "With over 15 years of expertise, we are the industry leaders in curated luxury experiences.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1]  as any} },
};

export function WhyUs() {
  return (
    <section className="bg-night px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            The Galaxy Standard
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-cream sm:text-4xl">
            Why Choose Galaxy Travels?
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {REASONS.map((reason) => (
            <motion.div
              key={reason.title}
              variants={rise}
              className="rounded-2xl border border-night-border bg-night-card p-6 text-center"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-night-border-strong bg-white/[0.03]">
                <reason.icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-lg font-medium text-cream">
                {reason.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-cream/60">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}