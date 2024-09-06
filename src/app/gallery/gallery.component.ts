import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  destinations = [
    {
      name: 'Paris, France',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Swiss Alps, Switzerland',
      coverImage: 'assets/images/p1.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Maui, Hawaii',
      coverImage: 'assets/images/p4.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    // Add more destinations as needed
  ];

  selectedDestination: any = null;

  constructor() {}

  openGallery(destination: any): void {
    this.selectedDestination = destination;
    const modalElement = document.getElementById('galleryModal');
    
    // Check if modalElement exists
    if (modalElement) {
      const galleryModal = new (window as any).bootstrap.Modal(modalElement);
      galleryModal.show();
    } else {
      console.error('Modal element not found');
    }
  }
}
