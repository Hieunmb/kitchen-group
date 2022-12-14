import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../service/api.service";
import {CartService} from "../service/cart.service";
import {WishlistService} from "../service/wishlist.service";

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent{

  public productList: any;
  constructor(private api: ApiService, private cartService: CartService, private http: HttpClient, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
    this.productBrand();
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  addtoWishList(item: any) {
    this.wishlistService.addtoWishlist(item)
  }

  p: number = 1;
  brand: any[] = [
    { id: 0, brandname: 'lus'}
  ];

  onActive() {
    window.scroll(0, 0);
  }
  productCookwear(e: any) {
    const url = 'http://localhost:3505/product-cookwear'
    this.http.get<any>(url)
      .subscribe(data => {
        this.productList = data;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  productRefrigeration(e: any) {
    const url = 'http://localhost:3505/product-refrigeration'
    this.http.get<any>(url)
      .subscribe(data => {
        this.productList = data;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  productAppliances(e: any) {
    const url = 'http://localhost:3505/product-appliances'
    this.http.get<any>(url)
      .subscribe(data => {
        this.productList = data;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  productFoodstorage(e: any) {
    const url = 'http://localhost:3505/product-foodstorage'
    this.http.get<any>(url)
      .subscribe(data => {
        this.productList = data;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  productKnivesandtools(e: any) {
    const url = 'http://localhost:3505/product-knivesandtools'
    this.http.get<any>(url)
      .subscribe(data => {
        this.productList = data;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  productlist1() {
    const url = 'http://localhost:3505/product-nameasc'
    this.http.get<any>(url)
      .subscribe(data => {
        this.productList = data;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  productlist2() {
    const url = 'http://localhost:3505/product-namedesc'
    this.http.get<any>(url)
      .subscribe(data => {
        this.productList = data;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  productlist3() {
    const url = 'http://localhost:3505/product-priceasc'
    this.http.get<any>(url)
      .subscribe(data => {
        this.productList = data;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
      })
  }
  productlist4() {
    const url = 'http://localhost:3505/product-pricedesc'
    this.http.get<any>(url)
      .subscribe(data => {
        this.productList = data;
        this.productList.forEach((a: any) => {
          Object.assign(a, {quantity:1, total:a.price});
        })
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
    const url = 'http://localhost:3505/product-brand'
    this.http.get<any>(url)
      .subscribe(data => {
        this.brand = data;
      })
  }
}
