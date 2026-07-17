"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { EnquiryForm } from "./EnquiryForm";

export function Contact() {
  return (
    <section id="contact" className="bg-night px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-display text-3xl font-medium text-cream sm:text-4xl">
            Plan Your Dream Trip Today
          </h2>
          <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-cream/60 sm:text-base">
            Our luxury travel specialists are ready to craft an unforgettable journey just for
            you. Fill out the form, and get a tailored quote within 2 hours.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Phone className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="font-sans text-xs text-cream/45">Emergency Hotline</p>
                <p className="font-sans text-sm font-semibold text-cream">+1 (800) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Mail className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="font-sans text-xs text-cream/45">Enquiry Email</p>
                <p className="font-sans text-sm font-semibold text-cream">travel@galaxytravels.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <EnquiryForm />
        </motion.div>
      </div>
    </section>
  );
}