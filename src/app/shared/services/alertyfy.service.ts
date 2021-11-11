import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertyfyService {

  constructor() { }
  success(message:string){
    alertyfy.success(message);
  }
  error(message:string){
    alertyfy.error(message);
  }
  promotMessage()
  {
    alertyfy.alert('Alert Title', 'Alert Message!', function(){ alertyfy.success('Ok'); });
  }
}
