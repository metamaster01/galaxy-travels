import type { FlashOffer } from "@/types/Offer";

// NOTE: update `endsAt` each time you run a new campaign — the countdown
// on the banner is computed live from this timestamp.
export const FLASH_OFFER: FlashOffer = {
  title: "Flash Sale: Up to 30% Off on Summer Getaways",
  description:
    "Book your dream vacation before the deadline and unlock exclusive seasonal discounts and complimentary lounge access.",
  ctaLabel: "Claim Offer Now",
  ctaHref: "#contact",
  image:
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
  endsAt: "2026-08-01T23:59:59+05:30",
};