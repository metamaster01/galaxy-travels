export type TripType = "Couple" | "Family" | "Solo" | "Group" | "Honeymoon";

export type PackageBadge = "Best Seller" | "New" | "Limited Deal";

/** Controls which card layout the listing grid renders for this package. */
export type CardVariant = "full" | "compact";

export type MealType = "Breakfast" | "Lunch" | "Dinner";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: MealType[];
  overnightAt?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface TourPackage {
  /** URL-safe unique id, used for the detail route: /packages/[slug] */
  slug: string;
  name: string;
  /** Country or region shown in filters/breadcrumbs, e.g. "Indonesia", "India" */
  destinationCountry: string;
  /** Whether the trip departs from within India (domestic) or is sold as an
   * outbound package to Indian travellers (international). */
  tripCategory: "domestic" | "international";
  tagline: string;

  heroImage: string;
  gallery: string[];

  badge?: PackageBadge;
  rating: number;
  reviewCount: number;

  durationDays: number;
  durationNights: number;
  tripType: TripType;

  startingPrice: number;
  currency: "USD" | "INR";
  priceNote?: string; // e.g. "per person, twin sharing"

  /** Which card layout the listing grid should use for this package. */
  cardVariant: CardVariant;

  /** Short bullet points shown on the "full" listing card. */
  highlights: string[];

  /** Longer summary shown at the top of the detail page. */
  overview: string;

  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  thingsToCarry: string[];
  termsAndConditions: string[];
  cancellationPolicy: string[];
  faqs: Faq[];
}