import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  destinations = [
    {
      name: 'Mnemba Island',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Aquarium',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Stone Town',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Spice Farms',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Nakupenda Sandbank',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Prison Island',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Jozani Forest',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Safari Blue',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Malum Cave',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Sunset',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    },
    {
      name: 'Sunset Cruise',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg',
        'assets/images/p3.jpeg'
      ]
    }
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
