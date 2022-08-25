import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { product, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

form!: FormGroup

Category: string[]=['--Select category--','fashion', 'electronics', 'jewellery']

  constructor(private productService:ProductsService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      name:[null,[Validators.required]],
      description:[null,[Validators.required]],
      price:[null,[Validators.required]],
      category:[null,[Validators.required]],
      image:[null,[Validators.required]],
      quantity:[null,[Validators.required]],
    })
  }

  addProduct(){
    console.log(this.form.value);
    
    this.productService.addNewProduct(this.form.value)
  }
}
