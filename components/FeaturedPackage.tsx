// "use client";

// import { motion } from "framer-motion";
// import { TOURS } from "@/data/tours";
// import { PackageCard } from "./PackageCard";

// export function FeaturedPackages() {
//   return (
//     <section id="destinations" className="bg-night px-4 py-20 sm:px-6 sm:py-28">
//       <div className="mx-auto max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="mx-auto max-w-xl text-center"
//         >
//           <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
//             Curated Experiences
//           </p>
//           <h2 className="mt-3 font-display text-3xl font-medium text-cream sm:text-4xl">
//             Featured Tour Packages
//           </h2>
//         </motion.div>

//         <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
//           {TOURS.map((tour) => (
//             <PackageCard key={tour.slug} tour={tour} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import { getFeaturedTrips } from "@/data/trips";
import { TripCard } from "./TripCard";

export function FeaturedTrips() {
  const trips = getFeaturedTrips();

  return (
    <section id="destinations" className="bg-night px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Curated Experiences
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-cream sm:text-4xl">
            Featured Tour Packages
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} variant="full" />
          ))}
        </div>
      </div>
    </section>
  );
}