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
      name: 'Mnemba Island',
      description: 'A private island paradise with crystal-clear waters and abundant marine life, perfect for diving and snorkeling.',
      imageUrl: 'assets/images/p8.jpeg',
    },
    {
      id: 2,
      name: 'Aquarium',
      description: 'A wonderful place to discover a variety of marine species and learn about ocean conservation.',
      imageUrl: 'assets/images/p8.jpeg',
    },
    {
      id: 3,
      name: 'Stone Town',
      description: 'A historic town featuring winding streets, spice markets, and centuries-old architecture.',
      imageUrl: 'assets/images/p8.jpeg',
    },
    {
      id: 4,
      name: 'Spice Farms',
      description: 'Tour the aromatic spice plantations that made Zanzibar famous, learning about their production and history.',
      imageUrl: 'assets/images/p8.jpeg',
    },
    {
      id: 5,
      name: 'Nakupenda Sandbank',
      description: 'A serene sandbank in the middle of the ocean, offering the perfect location for sunbathing and picnicking.',
      imageUrl: 'assets/images/p8.jpeg',
    },
    {
      id: 6,
      name: 'Prison Island',
      description: 'Famous for its giant tortoises and a history of confinement, now a peaceful sanctuary for visitors.',
      imageUrl: 'assets/images/p8.jpeg',
    },
    {
      id: 7,
      name: 'Jozani Forest',
      description: 'The lush forest is home to the rare Red Colobus monkeys and an array of other unique flora and fauna.',
      imageUrl: 'assets/images/p8.jpeg',
    },
    {
      id: 8,
      name: 'Safari Blue',
      description: 'An adventurous day trip by boat, discovering Zanzibar’s marine life, mangroves, and pristine sandbanks.',
      imageUrl: 'assets/images/p8.jpeg',
    },
    {
      id: 9,
      name: 'Malum Cave',
      description: 'Explore the mystical underground cave and take a refreshing swim in its crystal-clear waters.',
      imageUrl: 'assets/images/p8.jpeg',
    },
    {
      id: 10,
      name: 'Sunset',
      description: 'Watch the beautiful, colorful sunsets over the Indian Ocean, an experience not to be missed.',
      imageUrl: 'assets/images/p8.jpeg',
    },
    {
      id: 11,
      name: 'Sunset Cruise',
      description: 'Sail along the coast during the golden hour and experience the magic of a Zanzibari sunset.',
      imageUrl: 'assets/images/p8.jpeg',
    }
  ];
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
