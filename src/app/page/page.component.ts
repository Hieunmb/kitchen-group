import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent{
  product: any[] = [
    { id: 1, brandname:'ga'},
  ];cookware: any[] = [
    { id: 1, name:'ga'},
  ];refrigeration: any[] = [
    { id: 1, name:'ga'},
  ];appliances: any[] = [
    { id: 1, name:'ga'},
  ];foodstorage: any[] = [
    { id: 1, name:'ga'},
  ];
  constructor(private http: HttpClient) {

  }
  ngOnInit(){
    this.demobrandname();
    this.democookware();
    this.demofoodstorage();
    this.demoappliances();
    this.demorefrigeration();
  }
  demobrandname() {
    const url = 'http://localhost:3505/brand'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.product = data;
      })
  }democookware() {
    const url = 'http://localhost:3505/cookware'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.cookware = data;
      })
  }demorefrigeration() {
    const url = 'http://localhost:3505/refrigeration'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.refrigeration = data;
      })
  }demoappliances() {
    const url = 'http://localhost:3505/appliances'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.appliances = data;
      })
  }demofoodstorage() {
    const url = 'http://localhost:3505/foodstorage'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.foodstorage = data;
      })
  }


}
