import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
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
    return this.propertylistService.getPropertyDetail(+propId);

    //  return of ();
 //   const propId = route.params['id'];
    //return this.propertylistService.getAllProperties().subscribe(data => this.property = data[this.id-1])
    //this.propertylistService.getAllProperties().subscribe(data =>{console.log('data inside resolver '+data);})
    /* return this.propertylistService.getProperty(route.params?.id).pipe(
      delay(4000),
      catchError(() => {
        this.router.navigate(["/detadetail"]);
        return EMPTY;
      })

    ); */
    //return of ();

     /*  const propId = route.params['id'];
      return this.propertylistService.getPropertyDetail(+propId).pipe(
        catchError(error => {
          this.router.navigate(['/']);
          return of(null);
        })
      ); */

  }
}
