import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }
  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoWishlist(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);

  }
  removeWishlistItem(product: any) {
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllWishlist() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
