import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../services/api.service';
import { CartService, item } from '../services/cart.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private api:ApiService, private cartService:CartService, public auth:AuthService, private router:Router) { }

Products!: item[]
Products2!: item[]
filter=''

active=true

  ngOnInit(): void {
      this.api.getProduct().subscribe(res=>{
        
      this.Products = res;
      this.Products2 = res;

      this.Products.forEach((el)=>{
        if(el.CATEGORY==="women's clothing" || el.CATEGORY==="men's clothing"){
          el.CATEGORY = "fashion"
        }

        Object.assign(el, {quantity:1, total:el.PRICE})
      })

      this.api.activate.subscribe(val=>{
        this.filter = val

        
      })
    })
  }

  addProduct(){
    this.router.navigate(['home/addProduct'])
  }

  addToCart(item:item){
    this.cartService.addToCartList(item)
  }

  filterCategory(category: string){
    this.Products2 = this.Products.filter((el: item)=>{
      let items = (el.CATEGORY== category || category== '')
      return items
        
    })
    return this.Products2
  }
}
