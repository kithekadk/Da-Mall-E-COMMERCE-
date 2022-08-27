import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayComponent } from './display/display.component';
import { ElectronicsComponent } from './display/electronics/electronics.component';
import { FashionComponent } from './display/fashion/fashion.component';
import { JewelleryComponent } from './display/jewellery/jewellery.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { LoginComponent } from './admin/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import {HttpClientModule} from '@angular/common/http';
import { ShortenPipe } from './pipes/shorten.pipe';
import { CartComponent } from './cart/cart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayComponent,
    ElectronicsComponent,
    FashionComponent,
    JewelleryComponent,
    AddProductComponent,
    LoginComponent,
    SearchPipe,
    ShortenPipe,
    CartComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
