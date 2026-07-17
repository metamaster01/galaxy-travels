export interface Destination {
  slug: string;
  city: string;
  country: string;
  image: string;
  startingPrice: number;
  currency: "USD" | "INR";
}