import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length>25){
      return value.substring(0,25) + '...';
    }
    return value;
  }

}
