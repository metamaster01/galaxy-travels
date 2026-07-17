export const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
] as const;

export type BudgetRange = (typeof BUDGET_RANGES)[number];

export interface EnquiryPayload {
  fullName: string;
  phone: string;
  destination: string;
  travelDate: string; // yyyy-mm-dd from <input type="date">
  budget: BudgetRange | "";
  message?: string;
}