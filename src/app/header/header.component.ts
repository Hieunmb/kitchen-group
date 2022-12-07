import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  product: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  constructor(private http: HttpClient) {

  }
  searchForm: FormGroup = new FormGroup({
    name: new FormControl(),
  })
  classForm: string = '';
  ngOnInit(){
    this.onsearch();
  }
  onsearch() {
    this.classForm = this.searchForm.value.name;
    const url = 'http://localhost:5001/search-product?key='
    this.http.get<any>(url+this.classForm)
      .subscribe(data=>{
        this.product = data;
      })
  }
}
