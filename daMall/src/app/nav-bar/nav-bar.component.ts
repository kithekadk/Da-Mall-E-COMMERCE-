import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute,public auth: AuthService) { }

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
  addProduct(){
    this.router.navigate(['addProduct'] , {relativeTo: this.route})
  }

}
