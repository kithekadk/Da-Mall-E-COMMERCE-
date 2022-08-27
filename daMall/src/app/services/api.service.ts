import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { item } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<item[]>('https://fakestoreapi.com/products')
    .pipe(map((res)=>{
      console.log(res);
      
      return res;

    }))
  }

  activate= new EventEmitter<string>()

  // onActivate$ = this.activate.asObservable()

  // emitting(value:boolean){
  //   this.activate.emit(value)
  // }

}
