import {Component} from "@angular/core";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{


  onAddToCart(product:any){
    let cartItem:any={
      id:product.id,
      name:product.name,
      price:product.price,
      quanlity:1
    }
    console.log(product);
  }
}
