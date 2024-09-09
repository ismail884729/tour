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
  contactInfo: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.bookingForm = this.fb.group({
      fullName: [null, Validators.required],
      place: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
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

  ngOnInit(): void {
    this.loadContactInfo();
  }

  loadContactInfo() {
    const jsonData = `
      {
        "Phone": "0773302955",
        "Email": "hassantours99@gmail.com",
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Hassan Tours",
        "url": "https://yourwebsite.com",
        "description": "Book your next adventure with Hassan Tours. Explore exciting destinations around the world.",
        "logo": "https://example.com/path-to-logo.png",
        "sameAs": ["https://www.facebook.com/hassantours", "https://twitter.com/hassantours"]
      }
    `;

    this.contactInfo = JSON.parse(jsonData);
  }
}
