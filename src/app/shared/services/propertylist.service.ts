import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter,map } from 'rxjs/operators';
import { Property } from '../interfaces/property';


@Injectable({
  providedIn: 'root'
})
export class PropertylistService {
  properties: Property[] = [];
  constructor(private http:HttpClient) {}

  getAllProperties(){
  return  this.http.get<Property[]>('assets/properties.json')
  /* .pipe(map(property => property.filter(property => property.sellrent ===1)))
    .subscribe(data => {
      this.properties = data;
      console.log(this.properties+'   service is being provide data')
    },error => {
      console.log(error);

    }


    ) */
  ;
  }

}
