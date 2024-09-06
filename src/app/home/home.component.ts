import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  destinations = [
    {
      id: 1,
      name: 'Paris, France',
      description: 'The city of light offers romantic sights, gourmet dining, and a history that will amaze you.',
      imageUrl: 'assets/images/p8.jpeg',
    },
    {
      id: 2,
      name: 'Maui, Hawaii',
      description: 'Experience the tropical beaches, stunning sunsets, and rich culture of Maui.',
      imageUrl: 'assets/images/safari_in_serengeti.jpg'
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      description: 'Explore ancient temples, gardens, and the world-famous cherry blossoms of Kyoto.',
      imageUrl: 'assets/images/p3.jpeg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
