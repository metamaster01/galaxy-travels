"use client";

import { motion } from "framer-motion";
import { DESTINATIONS } from "@/data/Destinations";

const currencySymbol: Record<"USD" | "INR", string> = { USD: "$", INR: "₹" };

export function PopularDestinations() {
  return (
    <section className="bg-night px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Explore More
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium text-cream sm:text-4xl">
              Popular Destinations
            </h2>
          </div>
          <a
            href="/destinations"
            className="font-sans text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
          >
            View All Destinations
          </a>
        </motion.div>

        {/* Horizontal scroll-snap strip: holds the full catalog, not just
            the 4 visible at a time — drag or scroll for the rest. */}
        <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:gap-5 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {DESTINATIONS.map((dest, i) => (
            <motion.a
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[3/4] w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[240px]"
            >
              <img
                src={dest.image}
                alt={`${dest.city}, ${dest.country}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display text-lg font-medium text-white">{dest.city}</p>
                <p className="font-sans text-sm text-gold">
                  From {currencySymbol[dest.currency]}
                  {dest.startingPrice.toLocaleString()}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}