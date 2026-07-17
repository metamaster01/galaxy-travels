"use client";

import { motion } from "framer-motion";
import { Star, Clock, Users, Check } from "lucide-react";
import type { TourPackage } from "@/types/tour";

const currencySymbol: Record<TourPackage["currency"], string> = {
  USD: "$",
  INR: "₹",
};

export function PackageCard({ tour }: { tour: TourPackage }) {
  const isFull = tour.cardVariant === "full";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-night-border bg-night-card"
    >
      <a
        href={`/packages/${tour.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <img
          src={tour.heroImage}
          alt={tour.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {tour.badge && (
          <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-[#e08a3e] to-[#c9622e] px-3 py-1 font-sans text-[11px] font-semibold text-white shadow-sm">
            {tour.badge}
          </span>
        )}
      </a>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <a
            href={`/packages/${tour.slug}`}
            className="font-display text-lg font-medium text-cream hover:text-gold"
          >
            {tour.name}
          </a>
          {isFull && (
            <span className="flex shrink-0 items-center gap-1 pt-0.5 font-sans text-sm font-semibold text-cream">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              {tour.rating}
            </span>
          )}
        </div>

        {isFull && (
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-xs text-cream/55">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {tour.durationDays} Days / {tour.durationNights} Nights
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" />
              {tour.tripType}
            </span>
          </div>
        )}

        {isFull && (
          <ul className="mt-4 space-y-1.5">
            {tour.highlights.slice(0, 3).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 font-sans text-[13px] text-cream/70"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4">
          <div className="border-t border-night-border pt-4">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-wide text-cream/45">
                  Starting From
                </p>
                <p className="font-display text-xl font-medium text-cream">
                  {currencySymbol[tour.currency]}
                  {tour.startingPrice.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {isFull && (
                  <a
                    href={`/packages/${tour.slug}#enquire`}
                    className="rounded-full border border-night-border-strong px-4 py-2 font-sans text-xs font-semibold text-cream/85 transition-colors hover:bg-white/5"
                  >
                    Enquire
                  </a>
                )}
                <a
                  href={`/packages/${tour.slug}#book`}
                  className="rounded-full bg-gold px-4 py-2 font-sans text-xs font-semibold text-night transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}