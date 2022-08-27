import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService, item } from '../services/cart.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private api:ApiService, private cartService:CartService) { }

Products!: item[]
filter=''

active=true

  ngOnInit(): void {
      this.api.getProduct().subscribe(res=>{
      this.Products = res;

      this.Products.forEach((el)=>{
        Object.assign(el, {quantity:1, total:el.price})
      })

      this.api.activate.subscribe(val=>{
        this.filter = val

        
      })
    })
  }

  addToCart(item:item){
    this.cartService.addToCartList(item)
  }
}
