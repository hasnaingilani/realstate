import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter,map, retry } from 'rxjs/operators';
import { CProperty } from '../interfaces/CProperty';
import { Property } from '../interfaces/property';
import { Propertybase } from '../interfaces/propertybase';


@Injectable({
  providedIn: 'root'
})
export class PropertylistService {
  properties: CProperty[] = [];
  newProperty: CProperty[]=[];
  property = new CProperty();
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

      console.log('data received in service   '+String(this.properties));
      return this.properties;
      })
    );

  }
  getProperties(sellrent?:number) {
    this.properties = [];
    return this.http
      .get<CProperty[]>('assets/propertyList.json')
      .pipe(
         map(data => {
          for(const i in data)

          if(data[i].sellrent === sellrent)
          this.properties.push(data[i])
          console.log('data from service ..'+this.properties);
        return this.properties;
         }),
         catchError(this.handleError)
      );

  }
  getProperty(sellrent?:number) {
    this.properties = [];
    return this.http
      .get<CProperty[]>('assets/propertyList.json')
      .pipe(
         map(data => {

          for(const i in data)
        //  if(data[i].sellrent === sellrent)
          this.properties.push(data[i])
          console.log('data from service ..'+this.properties);
        return this.properties;
         }),
         catchError(this.handleError)
      );

  }
  /* getProperty(id: number): Observable<CProperty[]> {
    return this.getProperty().subscribe(data => this.properties = data[id]);

  } */
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }





}
