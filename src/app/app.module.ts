import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NavComponent} from "./nav/nav.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./aboutus/aboutus.component";
import {ContactComponent} from "./contact/contact.component";
import {PageComponent} from "./page/page.component";
import {ShopComponent} from "./shop/shop.component";

const appRoutes: Routes = [
  {path:'aboutus',component:AboutUsComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'page',component:PageComponent},
  {path:'shop',component:ShopComponent},
  {path:'header',component:HeaderComponent},
  {path:'nav',component:NavComponent},
  {path:'footer',component:FooterComponent},
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, NavComponent,HomeComponent,AboutUsComponent,HeaderComponent,ContactComponent,PageComponent,ShopComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
