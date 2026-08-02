import type { MetadataRoute } from "next";
import { TRIPS } from "@/data/trips";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/travel-insurance`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/sitemap`, changeFrequency: "monthly", priority: 0.2 },
  ];

  const tripRoutes: MetadataRoute.Sitemap = TRIPS.map((trip) => ({
    url: `${SITE_URL}/trips/${trip.id}`,
    changeFrequency: "weekly",
    priority: trip.featured ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...tripRoutes];
}