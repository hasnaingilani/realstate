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
  constructor(private propertyService:PropertylistService) { }
  properties1:any=[];
  today = new Date();

  ngOnInit() {
    this.loadProperties();
  }
  loadProperties() {
    return this.propertyService.getProperties(1).subscribe(data => this.properties = data)
  }
}
