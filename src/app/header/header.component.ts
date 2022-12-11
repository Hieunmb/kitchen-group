import {Component} from "@angular/core";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  public totalItem: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }
  public products: any = [];
  public grandTotal !: number;

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
}
