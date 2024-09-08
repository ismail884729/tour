import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  isMenuOpen = false;
  contactInfo: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  destinations = [
    {
      name: 'Mnemba Island',
      coverImage: 'assets/images/m1.jpeg',
      images: [
        'assets/images/m2.jpeg',
        'assets/images/m4.jpeg',
        'assets/images/m5.jpeg',
        'assets/images/m6.jpeg'
      ]
    },
    {
      name: 'Aquarium',
      coverImage: 'assets/images/a1.jpeg',
      images: [
        'assets/images/a1.jpeg',
        'assets/images/a2.jpeg',
        'assets/images/a3.jpeg',
        'assets/images/a4.jpeg'

      ]
    },
    {
      name: 'Stone Town',
      coverImage: 'assets/images/s1.jpeg',
      images: [
        'assets/images/s1.jpeg',
        'assets/images/s2.jpeg',
        'assets/images/s3.jpeg',
        'assets/images/s4.jpeg',
        'assets/images/s5.jpeg'
      ]
    },
    {
      name: 'Spice Farms',
      coverImage: 'assets/images/f1.jpeg',
      images: [
        'assets/images/f1.jpeg',
        'assets/images/f2.jpeg',
        'assets/images/f3.jpeg',
        'assets/images/f4.jpeg',
        'assets/images/f5.jpeg',
        'assets/images/f6.jpeg'
      ]
    },
    {
      name: 'Nakupenda Sandbank',
      coverImage: 'assets/images/n3.jpeg',
      images: [
        'assets/images/n1.jpeg',
        'assets/images/n2.jpeg',
        'assets/images/n3.jpeg',
        'assets/images/n4.jpeg',
        'assets/images/n5.jpeg'
      ]
    },
    {
      name: 'Prison Island',
      coverImage: 'assets/images/r2.jpeg',
      images: [
       'assets/images/r1.jpeg',
        'assets/images/r2.jpeg',
        'assets/images/r3.jpeg',
        'assets/images/r4.jpeg',
        'assets/images/r5.jpeg',
        'assets/images/r6.jpeg'
      ]
    },
    {
      name: 'Jozani Forest',
      coverImage: 'assets/images/j3.jpeg',
      images: [
        'assets/images/j1.jpeg',
        'assets/images/j2.jpeg',
        'assets/images/j3.jpeg',
        'assets/images/j4.jpeg',
        'assets/images/j5.jpeg',
        'assets/images/j6.jpeg'
      ]
    },
    {
      name: 'Safari Blue',
      coverImage: 'assets/images/p3.jpeg',
      images: [
        'assets/images/j1.jpeg',
        'assets/images/j2.jpeg',
        'assets/images/j3.jpeg',
        'assets/images/j4.jpeg',
        'assets/images/j5.jpeg',
        'assets/images/j6.jpeg'
      ]
    },
    {
      name: 'Malum Cave',
      coverImage: 'assets/images/ma1.jpeg',
      images: [
        
      ]
    },
    {
      name: 'Sunset',
      coverImage: 'assets/images/su1.jpeg',
      images: [
        
      ]
    },
    {
      name: 'Sunset Cruise',
      coverImage: 'assets/images/sc1.jpeg',
      images: [
      
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

    // Parse the JSON string
    this.contactInfo = JSON.parse(jsonData);
  }
}
