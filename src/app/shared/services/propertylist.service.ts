import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter,map } from 'rxjs/operators';
import { CProperty } from '../interfaces/CProperty';
import { Property } from '../interfaces/property';
import { Propertybase } from '../interfaces/propertybase';


@Injectable({
  providedIn: 'root'
})
export class PropertylistService {
  properties: Property[] = [];
  constructor(private http:HttpClient) {}

  getAllProperties(){
  return  this.http.get<Propertybase[]>('assets/propertyList.json')
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

  addNewProperty(property:CProperty){
    localStorage.setItem('newprop',JSON.stringify(property));
  }

}
