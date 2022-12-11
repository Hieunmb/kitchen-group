import {Component, Input} from "@angular/core";
import {OwlOptions} from "ngx-owl-carousel-o";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../service/cart.service";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  @Input()
  sosp = 1;
  tangsosp() {
    this.sosp++;
    this.demoproduct()
  }
  giamsosp() {
    if(this.sosp > 0) {
      this.sosp--;
      this.demoproduct()
    }
  }
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
        items: 5
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  constructor(private http: HttpClient, private _router: ActivatedRoute, private cartService: CartService, private api: ApiService) { }
  ids: any;
  ngOnInit(): void {
    this.ids = this._router.snapshot.paramMap.get('id');
    this._router.params.subscribe(params => {
      this.ids = params['id'];
      this.demoproduct();
    });
    this.listProductFeature();
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  id:any = "details";
  tabChange(ids: any) {
    this.id = ids;
  }
  id1:any = "img1";
  tabChange1(ids1: any) {
    this.id1 = ids1;
  }
  product: any[] = [
    { id: 1, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  productFeature: any[] = [
    { id: 1, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];

  demoproduct() {
    const url = 'http://localhost:5001/product-detail1?id='+ this.ids;
    this.http.get<any>(url)
      .subscribe(data=>{
        this.product = data;
        this.product.forEach((a: any) => {
          Object.assign(a, {quantity:this.sosp, total: a.price});
        })

      })

  }
  listProductFeature() {
    const url = 'http://localhost:5001/product-feature'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.productFeature = data;
      })
  }
  onActive() {
    window.scroll(0, 0);
  }
}
