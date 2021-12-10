import { Component, OnInit } from '@angular/core';
import { PropertylistService } from 'src/app/shared/services/propertylist.service';
import { filter,map} from 'rxjs/operators'
import { Propertybase } from 'src/app/shared/interfaces/propertybase';
import { CProperty } from 'src/app/shared/interfaces/CProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: CProperty[] = [];
  sellrent=  1;
  newProperty: CProperty[]=[];
  i:number = 1;

  constructor(private propertyService:PropertylistService) { }


  ngOnInit() {
   this.propertyService.getAllProperties()
    .pipe(map(property => property.filter(property => property.sellrent ===this.sellrent)))
    .subscribe(data =>
    {
      this.properties = data;
      console.log('data at property list component '+data);
      this.newProperty = JSON.parse(localStorage.getItem('newprop') || '[]');
      for(const i in this.newProperty)
          if(this.newProperty[i].sellrent==1)
          this.properties.push(this.newProperty[i])
        console.log('new Property  '+this.newProperty);

    },error => {
      console.log(error);
    })
 }
}
