import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../service/cart.service";
@Component({
  selector: 'informationshop',
  templateUrl: './informationshop.component.html',
  styleUrls: ['./informationshop.component.css']
})
export class InformationshopComponent{
  thank() {
    alert('Cảm ơn quý khách đã mua hàng');
  }
  formSub: FormGroup = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email, Validators.minLength(12),]),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    note: new FormControl(''),
  })
  get f() {
    return this.formSub.controls;
  }
  onSub() {
    this.formSub.reset();
  }
  public products: any = [];
  public grandTotal !: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
    this.totalBig = this.grandTotal + 30;
  }
  totalBig: number = 0;
  emptycart() {
    this.cartService.removeAllCart();
  }
}
