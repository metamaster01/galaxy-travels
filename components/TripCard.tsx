"use client";

import { motion } from "framer-motion";
import { Star, Clock, Users } from "lucide-react";
import type { Trip } from "@/types/trip";

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function TripCard({
  trip,
  variant,
}: {
  trip: Trip;
  variant: "full" | "compact";
}) {
  const hasDiscount = trip.discountedPrice < trip.originalPrice;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={
        variant === "full"
          ? "group flex flex-col overflow-hidden rounded-3xl border border-night-border bg-night-card"
          : "group relative shrink-0 snap-start overflow-hidden rounded-2xl"
      }
    >
      {variant === "compact" ? (
        // Compact card: image-forward, price + Book Now baked into the overlay
        <a href={`/trips/${trip.id}`} className="relative block aspect-[3/4] w-[220px] sm:w-[240px]">
          <img
            src={trip.image}
            alt={trip.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
          {trip.discountLabel && (
            <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-[#e08a3e] to-[#c9622e] px-3 py-1 font-sans text-[10px] font-semibold text-white shadow-sm">
              {trip.discountLabel}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="font-display text-base font-medium text-white">{trip.name}</p>
            <p className="mt-0.5 font-sans text-xs text-cream/60">{trip.state}</p>
            <div className="mt-2 flex items-center justify-between gap-2">
              <p className="font-sans text-sm font-semibold text-gold">
                From {formatINR(trip.discountedPrice)}{" "}
                <span className="font-normal text-cream/50">pp</span>
              </p>
              <span className="rounded-full bg-gold px-3 py-1.5 font-sans text-[11px] font-semibold text-night">
                Book Now
              </span>
            </div>
          </div>
        </a>
      ) : (
        <>
          <a href={`/trips/${trip.id}`} className="relative block aspect-[4/3] overflow-hidden">
            <img
              src={trip.image}
              alt={trip.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {trip.discountLabel && (
              <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-[#e08a3e] to-[#c9622e] px-3 py-1 font-sans text-[11px] font-semibold text-white shadow-sm">
                {trip.discountLabel}
              </span>
            )}
          </a>

          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <a
                  href={`/trips/${trip.id}`}
                  className="font-display text-lg font-medium text-cream hover:text-gold"
                >
                  {trip.name}
                </a>
                <p className="mt-0.5 font-sans text-xs text-cream/50">{trip.state}</p>
              </div>
              <span className="flex shrink-0 items-center gap-1 pt-0.5 font-sans text-sm font-semibold text-cream">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                {trip.rating}
                <span className="font-normal text-cream/40">({trip.reviews})</span>
              </span>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-xs text-cream/55">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {trip.duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" />
                {trip.groupSize}
              </span>
            </div>

            <ul className="mt-4 space-y-1.5">
              {trip.highlights.slice(0, 3).map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-[13px] text-cream/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4">
              <div className="border-t border-night-border pt-4">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-wide text-cream/45">
                      Starting From
                    </p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-display text-xl font-medium text-cream">
                        {formatINR(trip.discountedPrice)}
                      </p>
                      {hasDiscount && (
                        <p className="font-sans text-xs text-cream/40 line-through">
                          {formatINR(trip.originalPrice)}
                        </p>
                      )}
                      <p className="font-sans text-xs text-cream/45">/ person</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="/#contact"
                      className="rounded-full border border-night-border-strong px-4 py-2 font-sans text-xs font-semibold text-cream/85 transition-colors hover:bg-white/5"
                    >
                      Enquire
                    </a>
                    <a
                      href={`/trips/${trip.id}#book`}
                      className="rounded-full bg-gold px-4 py-2 font-sans text-xs font-semibold text-night transition-transform hover:scale-[1.03] active:scale-[0.98]"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.article>
  );
}