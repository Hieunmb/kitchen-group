import {Component} from "@angular/core";
import { OwlOptions } from 'ngx-owl-carousel-o';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.demoproduct();
    this.listcookwear();
    this.listappliances();
    this.listcookingpost();
    this.listfryingpans();
    this.listcookwearsets();
    this.listBlenders();
    this.listElectrickettles();
    this.listToasters();
    this.listCookwearBestseller();
    this.listAppliancesBestseller()
  }
  id:any = "new-arrivals";
  tabChange(ids: any) {
    this.id = ids;
  }
  id1:any = "shop-new";
  tabChange1(ids1: any) {
    this.id1 = ids1;
  }
  product: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  productcookwear: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  productappliances: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  productcookingpost: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  productfryingpans: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  productcookwearsets: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  productBlenders: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  productElectrickettles: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  productToasters: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  productcookwearbestseller: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  productappliancesbestseller: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  demoproduct() {
    const url = 'http://localhost:5001/product-feature'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.product = data;
      })
  }
  listcookwear() {
    const url = 'http://localhost:5001/product-cookwear'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productcookwear = data;
      })
  }
  listappliances() {
    const url = 'http://localhost:5001/product-appliances'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productappliances = data;
      })
  }
  listcookingpost() {
    const url = 'http://localhost:5001/productcookwear-cookingpost'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productcookingpost = data;
      })
  }
  listfryingpans() {
    const url = 'http://localhost:5001/productcookwear-fryingpans'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productfryingpans = data;
      })
  }
  listcookwearsets() {
    const url = 'http://localhost:5001/productcookwear-cookwearsets'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productcookwearsets = data;
      })
  }
  listBlenders() {
    const url = 'http://localhost:5001/productcookwear-blenders'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productBlenders = data;
      })
  }
  listElectrickettles() {
    const url = 'http://localhost:5001/productcookwear-electrickettles'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productElectrickettles = data;
      })
  }
  listToasters() {
    const url = 'http://localhost:5001/productcookwear-toasters'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productToasters = data;
      })
  }
  listCookwearBestseller() {
    const url = 'http://localhost:5001/productcookwear-bestseller'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productcookwearbestseller = data;
      })
  }
  listAppliancesBestseller() {
    const url = 'http://localhost:5001/productappliances-bestseller'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productappliancesbestseller = data;
      })
  }
}
