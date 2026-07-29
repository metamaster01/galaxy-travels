"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Users,
  Mountain,
  MapPin,
  Navigation,
  CalendarDays,
  UserCheck,
  CheckCircle2,
  XCircle,
  Backpack,
  ShieldCheck,
} from "lucide-react";
import type { Trip } from "@/types/trip";

const TABS = ["Overview", "Itinerary", "Inclusions & Exclusions", "Terms"] as const;
type Tab = (typeof TABS)[number];

export function TripTabs({ trip }: { trip: Trip }) {
  const [active, setActive] = useState<Tab>("Overview");

  const facts = [
    { icon: Clock, label: "Duration", value: trip.duration },
    { icon: Users, label: "Group Size", value: trip.groupSize },
    { icon: Mountain, label: "Difficulty", value: trip.difficulty },
    { icon: CalendarDays, label: "Best Months", value: trip.months },
    { icon: MapPin, label: "Meeting Point", value: trip.meetingPoint },
    { icon: Navigation, label: "End Point", value: trip.endPoint },
    { icon: UserCheck, label: "Minimum Age", value: `${trip.minAge}+` },
  ];

  return (
    <section className="bg-night px-4 py-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Sub-nav */}
        <div className="sticky top-[76px] z-30 -mx-4 flex gap-1 overflow-x-auto border-b border-night-border bg-night/95 px-4 py-2 backdrop-blur-sm sm:top-[88px] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${
                active === tab
                  ? "bg-gold text-night"
                  : "text-cream/60 hover:bg-white/5 hover:text-cream"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="py-8"
          >
            {active === "Overview" && (
              <div>
                <h2 className="font-display text-2xl font-medium text-cream">Overview</h2>
                <p className="mt-3 max-w-3xl font-sans text-sm leading-relaxed text-cream/65">
                  {trip.overview}
                </p>

                <ul className="mt-5 grid max-w-3xl grid-cols-1 gap-2 sm:grid-cols-2">
                  {trip.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-xl border border-night-border bg-night-card px-4 py-3 font-sans text-sm text-cream/75"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-start gap-3 rounded-2xl border border-night-border bg-night-card p-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <fact.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-sans text-xs text-cream/45">{fact.label}</p>
                        <p className="mt-0.5 font-sans text-sm font-medium text-cream">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {active === "Itinerary" && (
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl font-medium text-cream">
                  Day-by-Day Itinerary
                </h2>
                <ol className="mt-6 space-y-6 border-l border-night-border pl-6">
                  {trip.itinerary.map((day) => (
                    <li key={day.day} className="relative">
                      <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-gold font-sans text-[11px] font-bold text-night">
                        {day.day}
                      </span>
                      <p className="font-display text-base font-medium text-cream">{day.title}</p>
                      <ul className="mt-2 space-y-1.5">
                        {day.activities.map((activity) => (
                          <li
                            key={activity}
                            className="flex items-start gap-2 font-sans text-sm text-cream/65"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cream/30" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {active === "Inclusions & Exclusions" && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="font-display text-xl font-medium text-cream">Inclusions</h2>
                  <ul className="mt-4 space-y-2.5">
                    {trip.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-cream/70">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-xl font-medium text-cream">Exclusions</h2>
                  <ul className="mt-4 space-y-2.5">
                    {trip.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-cream/70">
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-cream/35" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {active === "Terms" && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="flex items-center gap-2 font-display text-xl font-medium text-cream">
                    <Backpack className="h-5 w-5 text-gold" />
                    Things to Carry
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {trip.thingsToCarry.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-cream/70">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="flex items-center gap-2 font-display text-xl font-medium text-cream">
                    <ShieldCheck className="h-5 w-5 text-gold" />
                    Terms & Conditions
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {trip.terms.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-cream/70">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cream/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}