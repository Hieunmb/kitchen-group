import {Component, Input} from "@angular/core";
import {OwlOptions} from "ngx-owl-carousel-o";

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
  }
  giamsosp() {
    if(this.sosp > 0) {
      this.sosp--;
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
        items: 4
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
  constructor() { }

  ngOnInit(): void {
  }
  id:any = "details";
  tabChange(ids: any) {
    this.id = ids;
  }
  id1:any = "img1";
  tabChange1(ids1: any) {
    this.id1 = ids1;
  }
}
