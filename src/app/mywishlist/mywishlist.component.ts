import {Component} from "@angular/core";
import {CartService} from "../service/cart.service";
import {WishlistService} from "../service/wishlist.service";

@Component({
  selector: 'mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.css']
})
export class MywishlistComponent{
  public products: any = [];
  public grandTotal !: number;

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlistService.getProducts()
      .subscribe(res => {
        this.products = res;
        // this.grandTotal = this.wishlistService.getTotalPrice();
      })
  }
  removeItem(item: any) {
    this.wishlistService.removeWishlistItem(item);
  }
  emptycart() {
    this.wishlistService.removeAllWishlist();
  }
}
