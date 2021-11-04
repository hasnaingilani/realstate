import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id":1,
      "name": "DHA House",
      "type": "House",
      "price": 125000,

  },
  {
    "Id":2,
    "name": "DHA House",
    "type": "House",
    "price": 125000,

},
{
  "Id":3,
  "name": "DHA House",
  "type": "House",
  "price": 125000,

},
{
  "Id":4,
  "name": "DHA House",
  "type": "House",
  "price": 125000,

},
{
  "Id":5,
  "name": "DHA House",
  "type": "House",
  "price": 125000,

},
{
  "Id":6,
  "name": "DHA House",
  "type": "House",
  "price": 125000,

},
{
  "Id":7,
  "name": "DHA House",
  "type": "House",
  "price": 125000,

},
]

  constructor() { }

  ngOnInit() {
  }

}
