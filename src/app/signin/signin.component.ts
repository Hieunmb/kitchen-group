import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{
  formSub: FormGroup = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email, Validators.minLength(12),]),
    password: new FormControl('', Validators.required),
  })
  get f() {
    return this.formSub.controls;
  }
  ngOnInit(): void {

  }
  onSub() {
    this.formSub.reset();
  }
}
