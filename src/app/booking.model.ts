export interface Booking {
    id?: number;
    userId: number;
    tourId: number;
    accommodationId?: number;
    bookingDate: Date;
    numberOfPeople: number;
    specialRequests?: string;
  }
  