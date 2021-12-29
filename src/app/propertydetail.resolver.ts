import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { CProperty } from './shared/interfaces/CProperty';
import { PropertylistService } from './shared/services/propertylist.service';

@Injectable({
  providedIn: 'root'
})
export class PropertydetailResolver implements Resolve<CProperty> {
  property = new CProperty();
  newProperty: CProperty[] = [];
  id:number = 1;
  constructor(private propertylistService: PropertylistService, private router: Router){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CProperty>{
    const propId = route.params['id'];
    return this.propertylistService.getPropertyDetail(propId).pipe(catchError(error => {
      this.router.navigate(['/']);
      return of(error);
    })
  );

  }

}
