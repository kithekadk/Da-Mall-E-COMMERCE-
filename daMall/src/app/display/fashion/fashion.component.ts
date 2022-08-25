import { Component, OnInit } from '@angular/core';
import { product, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  constructor( private productService:ProductsService) { }
fashion!: product[]
  ngOnInit(): void {
    this.fashion=this.productService.getFashion()
  }

}
