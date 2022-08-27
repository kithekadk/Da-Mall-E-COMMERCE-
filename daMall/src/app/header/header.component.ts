import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../services/api.service';
import { CartService, item } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private router:Router, private route:ActivatedRoute,public  auth:AuthService,
              private productService: ProductsService, private api:ApiService,
              private cartService:CartService) { }

  // filter=''
  items!: item[];
  product=''
  totalItems=0

  Activate(){
    this.api.activate.emit(this.product)
  }

  ngOnInit(): void {
    this.cartService.getCartItem().subscribe(res=>{
      this.totalItems = res.length
    })
  }
  
  toCart(){
    this.router.navigate(['home/cart'])
  }

  login(){
    this.router.navigate(['home/login'])
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['home/allProducts'])
  }
 
}
