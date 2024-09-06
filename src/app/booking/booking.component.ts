import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { Booking } from '../booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.bookingForm = this.fb.group({
      userId: [null, Validators.required],
      tourId: [null, Validators.required],
      accommodationId: [null],
      bookingDate: [null, Validators.required],
      numberOfPeople: [1, [Validators.required, Validators.min(1)]],
      specialRequests: ['']
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const booking: Booking = this.bookingForm.value;
      this.bookingService.createBooking(booking).subscribe(
        response => {
          console.log('Booking successful', response);
          // Handle successful booking, e.g., show a confirmation message
        },
        error => {
          console.error('Booking error', error);
          // Handle error, e.g., show an error message
        }
      );
    }
  }
}
