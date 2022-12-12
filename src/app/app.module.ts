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
import {MyaccountComponent} from "./myaccount/myaccount.component";
import {ProductComponent} from "./product/product.component";
import {MywishlistComponent} from "./mywishlist/mywishlist.component";
import {DeliveryComponent} from "./delivery/delivery.component";
import {TermsandconditionComponent} from "./termsandcondition/termsandcondition.component";
import {SearchComponent} from "./search/search.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgOptimizedImage} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {InformationshopComponent} from "./informationshop/informationshop.component";
import {ThankComponent} from "./thank/thank.component";

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'nav',component:NavComponent},
  {path:'footer',component:FooterComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'shop',component:ShopComponent},
  {path:'page',component:PageComponent},
  {path:'contact',component:ContactComponent},
  {path:'signin',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'mywishlist',component:MywishlistComponent},
  {path:'delivery',component:DeliveryComponent},
  {path:'termsandcondition',component:TermsandconditionComponent},
  {path:'search',component:SearchComponent},
  {path:'informationshop',component:InformationshopComponent},
  {path:'thank',component:ThankComponent},
  {path:'myaccount',component:MyaccountComponent},
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, NavComponent, HomeComponent,
    AboutusComponent, ShopComponent, PageComponent, ContactComponent , RegisterComponent ,SigninComponent ,
    CartComponent,ProductComponent,MywishlistComponent, DeliveryComponent, TermsandconditionComponent, SearchComponent,
    InformationshopComponent, ThankComponent ,MyaccountComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, CarouselModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, NgOptimizedImage, NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
