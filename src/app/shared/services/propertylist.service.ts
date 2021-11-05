import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertylistService {

  constructor(private http:HttpClient) {

  }
  getAllProperties(){
  return  this.http.get('assets/properties.json');

  }
}
