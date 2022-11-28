import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NavComponent} from "./nav/nav.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {ShopComponent} from "./shop/shop.component";
import {PageComponent} from "./page/page.component";
import {ContactComponent} from "./contact/contact.component";
import {RegisterComponent} from "./register/register.component";
import {SigninComponent} from "./signin/signin.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
import {ProductComponent} from "./product/product.component";
import {CartComponent} from "./cart/cart.component";

const appRoutes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'nav',component:NavComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'shop',component:ShopComponent},
  {path:'page',component:PageComponent},
  {path:'contact',component:ContactComponent},
  {path:'signin',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, NavComponent, HomeComponent,
    AboutusComponent, ShopComponent, PageComponent, ContactComponent , RegisterComponent ,SigninComponent, ProductComponent, CartComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes), HttpClientModule, CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
