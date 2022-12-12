import {Component} from "@angular/core";
import {WishlistService} from "../service/wishlist.service";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.css']
})
export class MywishlistComponent{
  public products: any = [];

  constructor(private wishlistService: WishlistService, private cartService: CartService) { }

  ngOnInit(): void {
    this.wishlistService.getProducts()
      .subscribe(res => {
        this.products = res;
      })
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  removeItem(item: any) {
    this.wishlistService.removeWishlistItem(item);
  }
  emptycart() {
    this.wishlistService.removeAllWishlist();
  }
}
