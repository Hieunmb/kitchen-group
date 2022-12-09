import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  formSub: FormGroup = new FormGroup({
    name: new FormControl('', [ Validators.required]),
    email: new FormControl('', [ Validators.required, Validators.email, Validators.minLength(12),]),
    subject: new FormControl('', [ Validators.required]),
    message: new FormControl('', [ Validators.required]),
  })
  constructor() {}
  ngOnInit(): void {

  }
  get f() {
    return this.formSub.controls;
  }
  onSub() {
    this.formSub.reset();
  }
}
