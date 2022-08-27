import { Pipe, PipeTransform } from '@angular/core';
import { item } from '../services/cart.service';
import { product } from '../services/products.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: item[], description: string): item[] {
    if (value.length === 0 || description === ''){
      
      return value
    }
    const filtered : item[]=[]

    for(let item of value){
      if (item.description.toLowerCase().includes(description.toLowerCase())){
        filtered.push(item);
      }
    }
    return filtered;
  }

}
