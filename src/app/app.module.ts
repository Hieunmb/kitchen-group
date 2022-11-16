import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NavComponent} from "./nav/nav.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'nav',component:NavComponent},
  {path:'footer',component:FooterComponent},
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, NavComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
