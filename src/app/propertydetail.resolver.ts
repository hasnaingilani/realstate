import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CProperty } from './shared/interfaces/CProperty';
import { PropertylistService } from './shared/services/propertylist.service';

@Injectable({
  providedIn: 'root'
})
export class PropertydetailResolver implements Resolve<CProperty> {
  constructor(private propertylistService: PropertylistService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CProperty> {

    return of();
  }
}
