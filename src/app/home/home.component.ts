import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMenuOpen = false;
  contactInfo: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  destinations = [
    {
      id: 1,
      name: 'Mnemba Island',
      description: 'A private island paradise with crystal-clear waters and abundant marine life, perfect for diving and snorkeling.',
      imageUrl: 'assets/images/m1.jpeg',
    },
   
    {
      id: 3,
      name: 'Stone Town',
      description: 'A historic town featuring winding streets, spice markets, and centuries-old architecture.',
      imageUrl: 'assets/images/s1.jpeg',
    },
    {
      id: 4,
      name: 'Spice Farms',
      description: 'Tour the aromatic spice plantations that made Zanzibar famous, learning about their production and history.',
      imageUrl: 'assets/images/f2.jpeg',
    },
    {
      id: 5,
      name: 'Nakupenda Sandbank',
      description: 'A serene sandbank in the middle of the ocean, offering the perfect location for sunbathing and picnicking.',
      imageUrl: 'assets/images/n1.jpeg',
    },
    {
      id: 6,
      name: 'Prison Island',
      description: 'Famous for its giant tortoises and a history of confinement, now a peaceful sanctuary for visitors.',
      imageUrl: 'assets/images/r1.jpeg',
    },
    {
      id: 7,
      name: 'Jozani Forest',
      description: 'The lush forest is home to the rare Red Colobus monkeys and an array of other unique flora and fauna.',
      imageUrl: 'assets/images/j1.jpeg',
    },
   
  ];
  

  

  constructor() { }

 


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
