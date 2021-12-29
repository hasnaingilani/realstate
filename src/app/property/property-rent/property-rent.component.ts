import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CProperty } from 'src/app/shared/interfaces/CProperty';
import { Property } from 'src/app/shared/interfaces/property';
import { Propertybase } from 'src/app/shared/interfaces/propertybase';
import { PropertylistService } from 'src/app/shared/services/propertylist.service';

@Component({
  selector: 'app-property-rent',
  templateUrl: './property-rent.component.html',
  styleUrls: ['./property-rent.component.css']
})
export class PropertyRentComponent implements OnInit {
  properties: CProperty[] = [];
  constructor(private propertyService1: PropertylistService) { }
  ngOnInit(): void {
    this.loadProperties();
  }
  loadProperties() {
   return this.propertyService1.getProperties(2).subscribe(data => this.properties = data)
  }

}
