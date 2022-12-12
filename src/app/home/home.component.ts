import {Component} from "@angular/core";
import { OwlOptions } from 'ngx-owl-carousel-o';
import {HttpClient} from "@angular/common/http";
import {CartService} from "../service/cart.service";
import {WishlistService} from "../service/wishlist.service";
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

  constructor(private http: HttpClient, private cartService: CartService, private wishlishService: WishlistService) { }

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
  product: any[] = [];
  productcookwear: any[] = [];
  productappliances: any[] = [];
  productcookingpost: any[] = [];
  productfryingpans: any[] = [];
  productcookwearsets: any[] = [];
  productBlenders: any[] = [];
  productElectrickettles: any[] = [];
  productToasters: any[] = [];
  productcookwearbestseller: any[] = [];
  productappliancesbestseller: any[] = [];
  demoproduct() {
    const url = 'http://localhost:3505/product-feature'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.product = data;
        this.product.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  listcookwear() {
    const url = 'http://localhost:3505/product-cookwear'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productcookwear = data;
        this.productcookwear.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  listappliances() {
    const url = 'http://localhost:3505/product-appliances'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productappliances = data;
        this.productappliances.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  listcookingpost() {
    const url = 'http://localhost:3505/productcookwear-cookingpost'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productcookingpost = data;
        this.productcookingpost.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  listfryingpans() {
    const url = 'http://localhost:3505/productcookwear-fryingpans'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productfryingpans = data;
        this.productfryingpans.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  listcookwearsets() {
    const url = 'http://localhost:3505/productcookwear-cookwearsets'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productcookwearsets = data;
        this.productcookwearsets.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  listBlenders() {
    const url = 'http://localhost:3505/productcookwear-blenders'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productBlenders = data;
        this.productBlenders.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  listElectrickettles() {
    const url = 'http://localhost:3505/productcookwear-electrickettles'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productElectrickettles = data;
        this.productElectrickettles.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  listToasters() {
    const url = 'http://localhost:3505/productcookwear-toasters'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productToasters = data;
        this.productToasters.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  listCookwearBestseller() {
    const url = 'http://localhost:3505/productcookwear-bestseller'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productcookwearbestseller = data;
        this.productcookwearbestseller.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  listAppliancesBestseller() {
    const url = 'http://localhost:3505/productappliances-bestseller'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productappliancesbestseller = data;
        this.productappliancesbestseller.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item)
  }
  addtoWishList(item: any) {
    this.wishlishService.addtoWishlist(item)
  }
}
