import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface item{
  id:number
  title:string
  price: number
  description :string
  category :string
  image:string
  quantity: number
  rating:{
    rate:number
    count:number
  }
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public cartList: item[]=[]
  public ProductList = new BehaviorSubject<item[]>([]);

  getCartItem(){
    return this.ProductList.asObservable()
  }

  setProduct(product: item[]){
    this.cartList.push(...product)
    this.ProductList.next(product)
  }

  addToCartList(product: item){
    this.cartList.push(product)
    this.ProductList.next(this.cartList)
    this.getTotalPrice()
    console.log(this.cartList);
    
  }

  getTotalPrice(){
    let grandTotal=0
    this.cartList.map((el: item)=>{
      grandTotal += el.price
    })
    return grandTotal
  }

  clearCart(){
    this.cartList=[]
    this.ProductList.next(this.cartList)
    console.log(this.cartList);
    
  }

  removeOneItem(index:number){
    this.cartList.splice(index,1)
    this.ProductList.next(this.cartList)
  }
}
