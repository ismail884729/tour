export interface Booking {
  fullName: string;
  place: string;
  phoneNumber: string;
  email: string;
  bookingDate: string;
  numberOfPeople: number;
  specialRequests?: string;
}
