import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './auth/auth.guard';

import { DisplayComponent } from './display/display.component';
import { ElectronicsComponent } from './display/electronics/electronics.component';
import { FashionComponent } from './display/fashion/fashion.component';
import { JewelleryComponent } from './display/jewellery/jewellery.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'', redirectTo:'home/allProducts', pathMatch:'full'},
  {path:'home', component: HeaderComponent,
    children:[
      {path:'allProducts', component: DisplayComponent},
      {path: 'electronics', component: ElectronicsComponent},
      {path: 'fashion', component: FashionComponent},
      {path: 'jewellery', component: JewelleryComponent},
      {path: 'login', component: LoginComponent},
      {path:'addProduct', canActivate: [AuthGuard] ,component: AddProductComponent}
    ]},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
