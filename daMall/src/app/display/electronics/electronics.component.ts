import { Component, OnInit } from '@angular/core';
import { product, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  electronics!: product[]
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.electronics = this.productService.getElectronic()    
  }


}
