export interface BookingPayload {
  tripId: string;
  tripName: string;
  fullName: string;
  phone: string;
  travelers: number;
  preferredDate?: string; // yyyy-mm-dd from <input type="date">
  message?: string;
}