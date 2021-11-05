import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/shared/interfaces/property';
import { PropertylistService } from 'src/app/shared/services/propertylist.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];

  constructor(private propertyService:PropertylistService) { }


  ngOnInit() {
    this.propertyService.getAllProperties().subscribe(data => {
      this.properties = data;
      console.log(data+'   service is being provide data')
    },error => {
      console.log(error);

    }


    )
    /* this.http.get('assets/properties.json').subscribe(data => {
      this.properties = data;
      console.log(data)
    }) */
  }

}
