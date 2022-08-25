import { Component, OnInit } from '@angular/core';
import { product, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent implements OnInit {

  constructor(private productService:ProductsService) { }
jewellery!: product[]
  ngOnInit(): void {
    this.jewellery= this.productService.getJewellery()
  }

}
