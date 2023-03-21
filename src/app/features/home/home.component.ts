import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  starw=5;
  rentingSteps: any[] = [
    {
      "id": 1,
      "title1": "EXPLORE & IDENTIFY",
      "url": "https://via.placeholder.com/160x80.png?text=Image+1"
    },
    {
      "id": 2,
      "title1": "CREATE ACCOUNT",
      "url": "https://via.placeholder.com/160x80.png?text=Image+1"
    },
    {
      "id": 1,
      "title1": "READ PRODUCT DETAILS &",
      "title2": "SELECT EVENT DATE",
      "url": "https://via.placeholder.com/160x80.png?text=Image+1"
    },
    {
      "id": 2,
      "title1": "ADD DETAILS",
      "url": "https://via.placeholder.com/160x80.png?text=Image+1"
    },
    {
      "id": 1,
      "title1": "PAYMENT & DELIVERY",
      "url": "https://via.placeholder.com/160x80.png?text=Image+1"
    },
    {
      "id": 2,
      "title1": "MEETING WITH SERVICE PROVIDER",
      "title2": "(AFTER THE BOOKING)",
      "url": "https://via.placeholder.com/160x80.png?text=Image+1"
    }
  ]

  gallery: any[] = [
    {
      "id": 1,
      "title": "EXPLORE & IDENTIFY1",
      "url": "https://via.placeholder.com/1200x400.png?text=Image+1"
    },
    {
      "id": 1,
      "title": "EXPLORE & IDENTIFY2",
      "url": "https://via.placeholder.com/1200x400.png?text=Image+1"
    },
    {
      "id": 1,
      "title": "EXPLORE & IDENTIFY3",
      "url": "https://via.placeholder.com/1200x400.png?text=Image+1"
    }
  ];

  products: any[] = [
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
  ];

  
  featueProducts: any[] = [
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
    {
      "id": 2,
      "title": "DECORATION",
      "price": "10,000",
      "description": "We deorate dfdgfd dgfgfg fhgnghg cfgrtr v dgdgd vdddg",
      "url": "https://via.placeholder.com/270x192.png?text=Image+1"
    },
  ];


  constructor() { }

  ngOnInit(): void {

  }

}
