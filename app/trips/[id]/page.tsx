import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTripById, TRIPS } from "@/data/trips";
import { TripHero } from "@/components/TripHero";
import { TripTabs } from "@/components/TripTabs";
import { PopularTrips } from "@/components/PopularDestination";
import { Testimonials } from "@/components/Testimonials";
import { OfferBanner } from "@/components/OfferBanner";

export function generateStaticParams() {
  return TRIPS.map((trip) => ({ id: trip.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const p = await params;
  const trip = getTripById(p.id);
  if (!trip) return {};
  return {
    title: `${trip.name} — Galaxy Travels`,
    description: trip.subtitle,
  };
}

export default async function TripDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const p = await params;
  const trip = getTripById(p.id);
  if (!trip) notFound();

  return (
    <main>
      <TripHero trip={trip} />
      <TripTabs trip={trip} />
      <PopularTrips excludeId={trip.id} heading="You Might Also Like" eyebrow="More Trips" />
      <Testimonials />
      <OfferBanner />
    </main>
  );
}