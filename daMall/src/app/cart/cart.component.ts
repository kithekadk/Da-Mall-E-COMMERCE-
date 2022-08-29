import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, item } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router, private cartService:CartService) { }

  products: item[]=[];
  grandTotal:number=0;
  ngOnInit(): void {
    this.cartService.getCartItem().subscribe(res=>{
      this.products=res;
      this.grandTotal = this.cartService.getTotalPrice()
    }) 
  }

  allProducts(){
    this.router.navigate(['home/allProducts']);
  }

  removeItem(index: number){
    this.cartService.removeOneItem(index)
  }

  emptyCart(){
    this.cartService.clearCart()
  }

}
