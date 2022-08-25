import { Component, OnInit } from '@angular/core';
import { product, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
newProduct: product={
  name:'',
  description:'',
  price:0,
  category:'',
  image:'',
  instock: true,
  quantity:0
}

Category: string[]=['fashion', 'electronics', 'jewellery']
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {

  }

  addProduct(){
    this.productService.addNewProduct(this.newProduct)
  }
}
