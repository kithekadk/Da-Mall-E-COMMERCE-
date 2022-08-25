import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

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
}
