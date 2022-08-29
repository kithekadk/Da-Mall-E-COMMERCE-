import { Pipe, PipeTransform } from '@angular/core';
import { item } from '../services/cart.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: item[], name: string): item[] {
    if (!value || name === ''){
      
      return value
    }
    const filtered : item[]=[]

    for(let item of value){
      if (item.TITLE.toLowerCase().includes(name.toLowerCase())){
        filtered.push(item);
      }
    }
    return filtered;
  }

}
