import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as events from "events";

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent{

  p: number = 1;
  product: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani', brandname: 'nh'},
  ];
  brand: any[] = [
    { id: 0, brandname: 'lus'}
  ];
  constructor(private http: HttpClient) {

  }
  ngOnInit(){
    this.demoproduct();
    this.productBrand();
  }
  demoproduct() {
    const url = 'http://localhost:5001/product-'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.product = data;
      })
  }

  onActive() {
    window.scroll(0, 0);
  }
  productCookwear(e: any) {
    const url = 'http://localhost:5001/product-cookwear'
    this.http.get<any>(url)
      .subscribe(data => {
        this.product = data;
      })
  }
  productRefrigeration(e: any) {
    const url = 'http://localhost:5001/product-refrigeration'
    this.http.get<any>(url)
      .subscribe(data => {
        this.product = data;
      })
  }
  productAppliances(e: any) {
    const url = 'http://localhost:5001/product-appliances'
    this.http.get<any>(url)
      .subscribe(data => {
        this.product = data;
      })
  }
  productFoodstorage(e: any) {
    const url = 'http://localhost:5001/product-foodstorage'
    this.http.get<any>(url)
      .subscribe(data => {
        this.product = data;
      })
  }
  productKnivesandtools(e: any) {
    const url = 'http://localhost:5001/product-knivesandtools'
    this.http.get<any>(url)
      .subscribe(data => {
        this.product = data;
      })
  }
  productlist1() {
    const url = 'http://localhost:5001/product-nameasc'
    this.http.get<any>(url)
      .subscribe(data => {
        this.product = data;
      })
  }
  productlist2() {
    const url = 'http://localhost:5001/product-namedesc'
    this.http.get<any>(url)
      .subscribe(data => {
        this.product = data;
      })
  }
  productlist3() {
    const url = 'http://localhost:5001/product-priceasc'
    this.http.get<any>(url)
      .subscribe(data => {
        this.product = data;
      })
  }
  productlist4() {
    const url = 'http://localhost:5001/product-pricedesc'
    this.http.get<any>(url)
      .subscribe(data => {
        this.product = data;
      })
  }
  productlist(e: any) {
    if (e.target.value == 1) {
      this.productlist1();
    }
    if (e.target.value == 2) {
      this.productlist2();
    }
    if (e.target.value == 3) {
      this.productlist3();
    }
    if (e.target.value == 4) {
      this.productlist4();
    }
  }
  productBrand() {
    const url = 'http://localhost:5001/product-brand'
    this.http.get<any>(url)
      .subscribe(data => {
        this.brand = data;
      })
  }
}
