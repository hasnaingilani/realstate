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
  return  this.http.get<CProperty[]>('assets/propertyList.json')
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
 newProp:CProperty[]=[];
  addNewProperty(property:CProperty){
    //let newProp = [property];
    if(localStorage.getItem('newprop')){
     this.newProp = [property,...JSON.parse(localStorage.getItem('newprop')!)]
    //  newProp.push(property);
      localStorage.setItem('newprop',JSON.stringify(this.newProp));
      console.log('adding multiple records to localstorage  ... '+this.newProp);
    }
else{
      localStorage.setItem('newprop',JSON.stringify(this.newProp));
      console.log('add new record to localstorage... '+this.newProp);
    }
  }
  addPID(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID',String(+localStorage.getItem('PID')!+1));
      return localStorage.getItem('PID');
    }else{
      localStorage.setItem('PID','101');
      return '101';
    }
  }

}
