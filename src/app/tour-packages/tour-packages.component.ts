import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrls: ['./tour-packages.component.css']
})
export class TourPackagesComponent implements OnInit {
  filterForm: FormGroup;
  tourPackages = [
    {
      id: 1,
      name: 'Paris Romantic Getaway',
      location: 'Paris, France',
      type: 'Romantic',
      price: 1500,
      description: 'A romantic tour in the city of light, perfect for couples.',
      imageUrl: 'assets/images/p4.jpeg',
    },
    {
      id: 2,
      name: 'Adventure in the Alps',
      location: 'Swiss Alps',
      type: 'Adventure',
      price: 2000,
      description: 'An adventurous trip through the Swiss Alps for thrill-seekers.',
      imageUrl: 'assets/images/p5.jpeg'
    },
    {
      id: 3,
      name: 'Hawaiian Beach Paradise',
      location: 'Maui, Hawaii',
      type: 'Beach',
      price: 1800,
      description: 'Relax on the pristine beaches of Maui.',
      imageUrl: 'assets/images/p6.jpeg'
    },
    // Add more tour packages
  ];

  locations: string[] = ['Paris, France', 'Swiss Alps', 'Maui, Hawaii'];
  tourTypes: string[] = ['Romantic', 'Adventure', 'Beach'];
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
    // Initialize filtered packages
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
}
