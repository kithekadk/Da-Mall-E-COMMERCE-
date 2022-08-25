import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../services/products.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: product[], description: string): product[] {
    if (value.length === 0 || description === ''){
      return value;
    }
    const filtered : product[]=[]
    for(let item of value){
      if (item.description.toLowerCase().includes(description.toLowerCase())){
        filtered.push(item);
      }
    }
    return filtered;
  }

}
