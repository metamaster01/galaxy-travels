export type Region = "india";

export type TripCategory =
  | "road-trip"
  | "trek"
  | "pilgrimage"
  | "beach"
  | "nature"
  | "cultural"
  | "adventure";

export type Difficulty = "Easy" | "Moderate" | "Challenging";

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface Trip {
  id: string;
  destinationSlug: string;
  region: Region;

  /** Shows this trip in the Featured Trips section on the homepage. */
  featured: boolean;
  /** Shows this trip in the Popular Trips strip (homepage + related-trips
   * on other detail pages). A trip can be both featured and popular. */
  popular: boolean;
  weekend: boolean;
  groupTour: boolean;

  name: string;
  subtitle: string;
  image: string;
  category: TripCategory;
  difficulty: Difficulty;
  location: string;
  state: string;

  duration: string; // e.g. "7N/8D"
  nights: number;
  days: number;

  months: string; // display string, e.g. "Jun – Sep"
  monthTags: string[];

  groupSize: string; // e.g. "8 – 16"
  minAge: number;

  /** All prices are in INR, quoted per person. */
  originalPrice: number;
  discountedPrice: number;
  discountLabel: string;

  rating: number;
  reviews: string; // e.g. "1.5k+"
  tags: string[];

  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  meetingPoint: string;
  endPoint: string;
  thingsToCarry: string[];
  terms: string[];
}