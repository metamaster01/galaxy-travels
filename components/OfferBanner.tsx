"use client";

import { motion } from "framer-motion";
import { FLASH_OFFER } from "@/data/Offer";
import { CountdownTimer } from "./CountDownTimer";

export function OfferBanner() {
  return (
    <section id="offers" className="bg-night px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl"
      >
        <img
          src={FLASH_OFFER.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/70 to-night/30" />

        <div className="relative z-10 flex min-h-[280px] flex-col justify-center px-6 py-12 sm:min-h-[320px] sm:px-12 sm:py-16">
          <div className="max-w-lg">
            <h2 className="font-display text-2xl font-medium text-cream sm:text-3xl md:text-4xl">
              {FLASH_OFFER.title}
            </h2>
            <p className="mt-4 font-sans text-sm text-cream/75 sm:text-base">
              {FLASH_OFFER.description}
            </p>

            <div className="mt-7 flex flex-col items-start gap-3">
              <a
                href={FLASH_OFFER.ctaHref}
                className="rounded-full bg-gold px-7 py-3.5 font-sans text-sm font-semibold text-night shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                {FLASH_OFFER.ctaLabel}
              </a>
              <CountdownTimer endsAt={FLASH_OFFER.endsAt} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}