import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  formSub: FormGroup = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email, Validators.minLength(12),]),
    password: new FormControl('', Validators.required),
    repassword: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
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
