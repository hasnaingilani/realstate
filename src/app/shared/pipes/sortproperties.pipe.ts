import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortproperties'
})
export class SortpropertiesPipe implements PipeTransform {

  transform(value: Array<String>, args:any[]): any {
    const sortField = args[0];
    const sortDirection = args[1];
    let multi = 1;
    if(sortDirection === 'desc')
      multi = -1;
    value.sort((a:any, b : any) => {
      if(a[sortField] < b[sortField])
        return -1 * multi;
      else if(a[sortField] > b[sortField])
      return 1 * multi;
      else return 0;

    });
    return value;

  }

}
