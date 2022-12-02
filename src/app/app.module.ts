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
import {CartComponent} from "./cart/cart.component";
import {ProductComponent} from "./product/product.component";
import {MywishlistComponent} from "./mywishlist/mywishlist.component";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {DeliveryComponent} from "./delivery/delivery.component";
import {TermsandconditionComponent} from "./termsandcondition/termsandcondition.component";

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
  {path:'cart',component:CartComponent},
  {path:'home/product',component:ProductComponent},
  {path:'mywishlist',component:MywishlistComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'page/termsandcondition',component:TermsandconditionComponent},
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, NavComponent, HomeComponent,
    AboutusComponent, ShopComponent, PageComponent, ContactComponent , RegisterComponent ,SigninComponent ,
    CartComponent,ProductComponent,MywishlistComponent,WishlistComponent, DeliveryComponent, TermsandconditionComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes), HttpClientModule, CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
