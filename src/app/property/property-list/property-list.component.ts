import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/shared/interfaces/property';
import { PropertylistService } from 'src/app/shared/services/propertylist.service';
import { filter,map} from 'rxjs/operators'

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];

  constructor(private propertyService:PropertylistService) { }


  ngOnInit() {
    this.propertyService.getAllProperties()
    .pipe(map(property => property.filter(property => property.sellrent ===2)))
    .subscribe(data => {
      this.properties = data;
      console.log(data+'   service is being provide data')
    },error => {
      console.log(error);

    }


    )

  }

}
