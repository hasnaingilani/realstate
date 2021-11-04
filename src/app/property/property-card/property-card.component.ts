import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  Property:any = {
    "Id":1,
    "name": "DHA House",
    "type": "House",
    "price": 125000,

  }

  constructor() { }

  ngOnInit() {
  }

}
