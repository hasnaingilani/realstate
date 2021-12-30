import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterproperties'
})
export class FilterpropertiesPipe implements PipeTransform {

  transform(value: any[],filterString:string,propName:string): any[] {
    const propertyArray = [];
    if(value.length==0 || filterString==''||propName=='')
      return value;
    for(const item of value)
      if(item[propName]==filterString){
        propertyArray.push(item);
      }
      return propertyArray;
  }

}
