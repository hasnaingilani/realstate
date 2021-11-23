import { Component, Input, OnInit } from '@angular/core';
import { Propertybase } from 'src/app/shared/interfaces/propertybase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input()
  property!: Propertybase;

  constructor() { }

  ngOnInit() {

  }

}
