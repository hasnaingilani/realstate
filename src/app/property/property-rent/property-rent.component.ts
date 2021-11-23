import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Property } from 'src/app/shared/interfaces/property';
import { Propertybase } from 'src/app/shared/interfaces/propertybase';
import { PropertylistService } from 'src/app/shared/services/propertylist.service';

@Component({
  selector: 'app-property-rent',
  templateUrl: './property-rent.component.html',
  styleUrls: ['./property-rent.component.css']
})
export class PropertyRentComponent implements OnInit {
  sellrent = 2;
  properties: Propertybase[] = [];

  constructor(private propertyService: PropertylistService) { }


  ngOnInit(): void {
    this.propertyService.getAllProperties()
    .pipe(map(property => property.filter(property => property.sellrent ===this.sellrent)))
    .subscribe(data => {
      this.properties = data;
      console.log(data+'    Property list module is being provide data')
    },error => {
      console.log(error);
    })
  }

}
