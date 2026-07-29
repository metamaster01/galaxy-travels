"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Trip } from "@/types/trip";
import { TripBreadcrumb } from "./Tripsbreadcrumb";
import { BookingForm } from "./BookingForm";

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function TripHero({ trip }: { trip: Trip }) {
  const hasDiscount = trip.discountedPrice < trip.originalPrice;

  return (
    <section className="bg-night px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <TripBreadcrumb />

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <img src={trip.image} alt={trip.name} className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-3xl font-medium text-cream sm:text-4xl">
              {trip.name}
            </h1>
            <p className="mt-1.5 font-sans text-sm text-cream/60">{trip.subtitle}</p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-sans text-sm text-cream/70">
              <span className="inline-flex items-center gap-1.5 font-semibold text-cream">
                <Star className="h-4 w-4 fill-gold text-gold" />
                {trip.rating}
                <span className="font-normal text-cream/45">({trip.reviews})</span>
              </span>
              <span>·</span>
              <span>{trip.duration}</span>
              <span>·</span>
              <span>{trip.state}</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-sans text-sm text-cream/50">From</span>
              <span className="font-display text-3xl font-medium text-gold">
                {formatINR(trip.discountedPrice)}
              </span>
              {hasDiscount && (
                <span className="font-sans text-sm text-cream/40 line-through">
                  {formatINR(trip.originalPrice)}
                </span>
              )}
              <span className="font-sans text-sm text-cream/45">per person</span>
            </div>

            <p className="mt-4 font-sans text-sm leading-relaxed text-cream/65">
              {trip.overview}
            </p>

            <div className="mt-6">
              <BookingForm tripId={trip.id} tripName={trip.name} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}