import { Component, OnInit } from '@angular/core';
import { product, ProductsService } from '../services/products.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor( private productService:ProductsService) { }

  ngOnInit(): void {
    this.Products = this.productService.getProducts()
  }
filter=''
Products!:product[]


  



}
