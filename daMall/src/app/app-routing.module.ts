import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './cart/cart.component';

import { DisplayComponent } from './display/display.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'', redirectTo:'home/allProducts', pathMatch:'full'},
  {path:'home', component: HeaderComponent, children:[
    {path: 'login', component: LoginComponent},
    {path: 'cart', component: CartComponent},
    {path:'allProducts', component: DisplayComponent},        
    {path:'addProduct', canActivate: [AuthGuard] ,component: AddProductComponent}
  ]},
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
