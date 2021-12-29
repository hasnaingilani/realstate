import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CProperty } from '../interfaces/CProperty';


@Injectable({
  providedIn: 'root'
})
export class PropertylistService {
  properties: CProperty[] = [];
  property = new CProperty();
  newProp:CProperty[]=[];
  constructor(private http:HttpClient) {}

/* get All Properties from JSON file */

  getAllProperties():Observable<CProperty[]>{
    return  this.http.get<CProperty[]>('assets/propertyList.json')
  }

  /* get All Properties from JSON file basic on sellrent field value */
  getProperties(sellrent?:number) {
    this.properties = [];
    return this.http.get<CProperty[]>('assets/propertyList.json')
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
/* get detail of selected property from JSON file */
  getPropertyDetail(id:number) {
    return this.getAllProperties().pipe(map(data => this.property = data[id-1]))
  }
/* add new property to localstorage */

  addNewProperty(property:CProperty){
   if(localStorage.getItem('newprop')){
     this.newProp = [property,...JSON.parse(localStorage.getItem('newprop')!)]
    localStorage.setItem('newprop',JSON.stringify(this.newProp));
    console.log('adding multiple records to localstorage  ... '+this.newProp);
   }
    else{
      localStorage.setItem('newprop',JSON.stringify(this.newProp));
      console.log('add new record to localstorage... '+this.newProp);
    }
  }
  /* get new PID from localstorage*/
  addPID(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID',String(+localStorage.getItem('PID')!+1));
      return localStorage.getItem('PID');
    }else{
      localStorage.setItem('PID','101');
      return '101';
    }
  }

/* Error handling  */

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
