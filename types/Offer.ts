export interface FlashOffer {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  /** ISO timestamp the offer expires at, e.g. "2026-08-01T23:59:59+05:30" */
  endsAt: string;
}