import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.css']
})
export class TourPackagesComponent implements OnInit {

  isMenuOpen = false;
  contactInfo: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  filterForm: FormGroup;
  tourPackages = [
    {
      id: 1,
      name: 'Mnemba Island',
      location: 'Zanzibar',
      type: 'Beach',
      price: 1800,
      description: 'Experience the beauty of Mnemba Island with its pristine beaches and clear waters.',
      imageUrl: 'assets/images/m1.jpeg'
    },
    {
      id: 2,
      name: 'Aquarium',
      location: 'Zanzibar',
      type: 'Adventure',
      price: 1500,
      description: 'Explore the underwater world at the Zanzibar Aquarium.',
      imageUrl: 'assets/images/a1.jpeg'
    },
    {
      id: 3,
      name: 'Stone Town',
      location: 'Zanzibar',
      type: 'Cultural',
      price: 1200,
      description: 'Discover the historic Stone Town with its rich culture and architecture.',
      imageUrl: 'assets/images/s1.jpeg'
    },
    {
      id: 4,
      name: 'Spice Farms',
      location: 'Zanzibar',
      type: 'Cultural',
      price: 1300,
      description: 'Visit the spice farms and learn about Zanzibar’s spice trade.',
      imageUrl: 'assets/images/f1.jpeg'
    },
    {
      id: 5,
      name: 'Nakupenda Sandbank',
      location: 'Zanzibar',
      type: 'Beach',
      price: 2000,
      description: 'Relax on the Nakupenda Sandbank, a pristine and isolated beach.',
      imageUrl: 'assets/images/n1.jpeg'
    },
    {
      id: 6,
      name: 'Prison Island',
      location: 'Zanzibar',
      type: 'Historical',
      price: 1700,
      description: 'Visit Prison Island and see the giant tortoises and learn about its history.',
      imageUrl: 'assets/images/r1.jpeg'
    },
    {
      id: 7,
      name: 'Jozani Forest',
      location: 'Zanzibar',
      type: 'Nature',
      price: 1400,
      description: 'Explore the lush Jozani Forest, home to the endemic Red Colobus monkeys.',
      imageUrl: 'assets/images/j1.jpeg'
    },
    {
      id: 8,
      name: 'Safari Blue',
      location: 'Zanzibar',
      type: 'Adventure',
      price: 2100,
      description: 'Enjoy a full day of adventure with the Safari Blue tour, including snorkeling and dolphin watching.',
      imageUrl: 'assets/images/n1.jpeg'
    },
    {
      id: 9,
      name: 'Malum Cave',
      location: 'Zanzibar',
      type: 'Adventure',
      price: 1600,
      description: 'Explore the stunning Malum Cave and its natural beauty.',
      imageUrl: 'assets/images/a4.jpeg'
    },
    {
      id: 10,
      name: 'Sunset',
      location: 'Zanzibar',
      type: 'Relaxation',
      price: 1800,
      description: 'Enjoy a serene sunset experience over the Indian Ocean.',
      imageUrl: 'assets/images/su1.jpeg'
    },
    {
      id: 11,
      name: 'Sunset Cruise',
      location: 'Zanzibar',
      type: 'Relaxation',
      price: 2000,
      description: 'Set sail on a sunset cruise and enjoy the breathtaking views.',
      imageUrl: 'assets/images/sc1.jpeg'
    },
    {
      id: 12,
      name: 'Cooking Class (Swahili Food)',
      location: 'Zanzibar City',
      type: 'Cultural',
      price: 1100,
      description: 'Learn to cook traditional Swahili dishes in a hands-on cooking class.',
      imageUrl: 'assets/images/sw1.jpeg'
    },
    {
      id: 13,
      name: 'Village Tours',
      location: 'Zanzibar City',
      type: 'Cultural',
      price: 950,
      description: 'Experience the local culture and lifestyle with guided village tours.',
      imageUrl: 'assets/images/vi1.jpeg'
    }
  ];

  locations: string[] = [
    'Zanzibar',
    'Zanzibar City'
  ];

  tourTypes: string[] = [
    'Beach',
    'Adventure',
    'Cultural',
    'Nature',
    'Historical',
    'Relaxation'
  ];

  priceRanges: string[] = ['0-1000', '1000-2000', '2000+'];

  filteredPackages: any[] = [];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      location: [''],
      type: [''],
      priceRange: ['']
    });
  }

  ngOnInit(): void {
    this.filteredPackages = [...this.tourPackages];
  }

  applyFilters(): void {
    const filters = this.filterForm.value;
    this.filteredPackages = this.tourPackages.filter(pkg => {
      return this.filterByLocation(pkg, filters.location) &&
             this.filterByType(pkg, filters.type) &&
             this.filterByPrice(pkg, filters.priceRange);
    });
  }

  filterByLocation(pkg: any, location: string): boolean {
    return !location || pkg.location === location;
  }

  filterByType(pkg: any, type: string): boolean {
    return !type || pkg.type === type;
  }

  filterByPrice(pkg: any, priceRange: string): boolean {
    if (!priceRange) {
      return true;
    }

    const [min, max] = priceRange.split('-').map(val => +val);
    if (max) {
      return pkg.price >= min && pkg.price <= max;
    } else {
      return pkg.price >= min;
    }
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
