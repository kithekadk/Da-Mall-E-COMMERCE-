import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators'
import { item } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

errorMsg : string=''
  getProduct(){
    return this.http.get<item[]>('http://localhost:4300/product/all')
    .pipe(map((res)=>{
     
      return res;
      

    }))
  }
  addProduct(product:item){
    
    return this.http.post<item>('http://localhost:4300/product/create', product)
    }

  activate= new EventEmitter<string>()



}
