import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter,map } from 'rxjs/operators';
import { CProperty } from '../interfaces/CProperty';
import { Property } from '../interfaces/property';
import { Propertybase } from '../interfaces/propertybase';


@Injectable({
  providedIn: 'root'
})
export class PropertylistService {
  properties: CProperty[] = [];
  newProperty: CProperty[]=[];
  constructor(private http:HttpClient) {}

  getAllProperties(){
  return  this.http.get<CProperty[]>('assets/propertyList.json')
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
  getPropertyDetail(id:number){

  }

  getAllProperties2(sellrent: number): Observable<CProperty[]> {
    return this.http.get<CProperty[]>('assets/propertyList.json').pipe(
      map(data => {
        data.filter(data => data.sellrent ===sellrent)
       this.properties = data;
       console.log('data from file  '+data);
      this.newProperty = JSON.parse(localStorage.getItem('newprop') || '[]');
      console.log('data from localstorage '+this.newProperty);
      for(const i in this.newProperty)
          if(this.newProperty[i].sellrent==sellrent)
          this.properties.push(this.newProperty[i])
        console.log('combined data of localstorage and file  '+this.properties);
      /* const propertiesArray: Array<CProperty> = [];
      const localProperties = JSON.parse(localStorage.getItem('newprop')!);
      if (localProperties) {
        for (const id in localProperties) {
          if (localProperties.hasOwnProperty(id) && localProperties[id].sellrent === 1)
            propertiesArray.push(localProperties[id]);
         // }
        }
      }
      for (const id in data) {
          propertiesArray.push(data[id]);
      }
      this.properties = propertiesArray; */
      console.log('data received in service   '+String(this.properties));
      return this.properties;
      })
    );

  }


  getAllProperties3(SellRent?: number): Observable<CProperty[]> {
    return this.http.get<CProperty[]>('assets/propertyList.json').pipe(
      map((data) => {
      const propertiesArray: CProperty[] = [];
      const localProperties = JSON.parse(localStorage.getItem('newprop')!);

      if (localProperties) {
        for (const id in localProperties) {
          if (SellRent) {
          if (localProperties.hasOwnProperty(id) && localProperties[id].sellrent === SellRent) {
            propertiesArray.push(localProperties[id]);
          }
        } else {
          propertiesArray.push(localProperties[id]);
        }
        }
      }

      for (const id in data) {
        if (SellRent) {
          if (data.hasOwnProperty(id) && data[id].sellrent === SellRent) {
            propertiesArray.push(data[id]);
          }
          } else {
            propertiesArray.push(data[id]);
        }
      }
      console.log('Property Detail in service method  '+propertiesArray);
      return propertiesArray;
      })
    );

    //return this.http.get<CProperty[]>('data/properties.json');
  }
  getProperty(id: string) {
    return this.getAllProperties3();
  }

}
