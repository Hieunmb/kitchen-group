import {Component} from "@angular/core";
import {OwlOptions} from "ngx-owl-carousel-o";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
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
  formSub: FormGroup = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email, Validators.minLength(12),])
  })
  constructor() { }
  get f() {
    return this.formSub.controls;
  }
  ngOnInit(): void {

  }
  onSub() {
    this.formSub.reset();
  }
}
