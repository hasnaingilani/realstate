import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../interfaces/property';

@Injectable({
  providedIn: 'root'
})
export class PropertylistService {

  constructor(private http:HttpClient) {

  }
  getAllProperties(){
  return  this.http.get<Property[]>('assets/properties.json');

  }
}
