"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/Testimonials";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function Testimonials() {
  return (
    <section id="reviews" className="bg-night px-4 pt-16 sm:px-6 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-cream sm:text-4xl">
            What Our Travelers Say
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={rise}
              className="flex flex-col rounded-2xl border border-night-border bg-night-card p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 font-sans text-sm leading-relaxed text-cream/75">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-sans text-sm font-semibold text-cream">{t.name}</p>
                  <p className="font-sans text-xs text-cream/50">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}