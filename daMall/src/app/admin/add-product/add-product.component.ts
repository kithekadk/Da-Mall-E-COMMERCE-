import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { item } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

form!: FormGroup
products! : item
Category: string[]=['--Select category--', 'electronics', 'jewelery',"men's clothing","women's clothing"]

  constructor(private http:HttpClient ,private apiService:ApiService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      TITLE:[null,[Validators.required]],
      DESCRIPTION:[null,[Validators.required]],
      PRICE:[null,[Validators.required]],
      CATEGORY:[null,[Validators.required]],
      IMAGE:[null,[Validators.required]],
      QUANTITY:[null,[Validators.required]]
    })
  }

  
  addProduct(){
    
   let obj={
    form :  this.form.value
   };
  //  console.log(obj.form);
   
  this.apiService.addProduct(obj.form).subscribe(res=>{
    
    console.log(res);
    this.router.navigate(['home/allProducts'])
  })
  }

}
