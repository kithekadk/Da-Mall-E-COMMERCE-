import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './cart/cart.component';

import { DisplayComponent } from './display/display.component';
import { ElectronicsComponent } from './display/electronics/electronics.component';
import { FashionComponent } from './display/fashion/fashion.component';
import { JewelleryComponent } from './display/jewellery/jewellery.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {path:'', redirectTo:'home/nav/allProducts', pathMatch:'full'},
  {path:'home', component: HeaderComponent,children:[
      {path: 'cart', component: CartComponent},
      {path: 'login', component: LoginComponent},
      {path:'nav', component: NavBarComponent,
      children:[
        {path:'allProducts', component: DisplayComponent},
        {path: 'electronics', component: ElectronicsComponent},
        {path: 'fashion', component: FashionComponent},
        {path: 'jewellery', component: JewelleryComponent},
        
        
        {path:'addProduct', canActivate: [AuthGuard] ,component: AddProductComponent}
      ]},
  ]}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
