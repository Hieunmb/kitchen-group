import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  classh4: any = 'text-center search-title';
  classproduct: any = 'none';
  product: any[] = [
    { id: 1, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani', thumbnail3: 'adsd', product_id: 1, thumbnail2: 'adsd',},
  ];
  constructor(private http: HttpClient) {

  }
  searchForm: FormGroup = new FormGroup({
    name: new FormControl(),
  })
  index: number = 0;
  ngOnInit(){
    // this.demoproduct();
  }
  demoproduct() {
    if(this.searchForm.value.name != null) {
      this.classh4 = 'none';
      this.classproduct = 'search-item';
      const url = 'http://localhost:5001/search-product?key='
      this.http.get<any>(url+this.searchForm.value.name)
        .subscribe(data=>{
          this.product = data;
          this.index = data.length;
        })
    }

  }
}
