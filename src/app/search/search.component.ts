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
  product: any[] = [];
  constructor(private http: HttpClient) {

  }
  searchForm: FormGroup = new FormGroup({
    name: new FormControl(),
  })
  ngOnInit(){

  }
  demoproduct() {
    if(this.searchForm.value.name != '') {
      this.classh4 = 'none';
      this.classproduct = 'search-item';
      const url = 'http://localhost:5001/search-product?key='
      this.http.get<any>(url+this.searchForm.value.name)
        .subscribe(data=>{
          this.product = data;
        })
    }else {
      this.classh4 = 'text-center search-title';
      this.classproduct = 'none';
    }

  }
}
