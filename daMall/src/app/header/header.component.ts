import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { product } from '../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

items!: product[]

  constructor(private router:Router, private route:ActivatedRoute,public  auth:AuthService) { }

  filter=''
  ngOnInit(): void {
    
  }
  allProducts(){
    this.router.navigate(['allProducts'] , {relativeTo: this.route})
  }
  
  getElectronics(){
    this.router.navigate(['electronics'] , {relativeTo: this.route})
  }

  getJewellery(){
    this.router.navigate(['jewellery'] , {relativeTo: this.route})
  }
  getFashion(){
    this.router.navigate(['fashion'] , {relativeTo: this.route})
  }

  login(){
    this.router.navigate(['login'] , {relativeTo: this.route})
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['home/allProducts'])
  }
  addProduct(){
    this.router.navigate(['addProduct'] , {relativeTo: this.route})
  }
}
