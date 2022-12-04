import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  product: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  constructor(private http: HttpClient) {

  }
  ngOnInit(){
    this.demoproduct();
  }
  demoproduct() {
    // const id = this._router.snapshot.paramMap.get('id');
    const url = 'http://localhost:5001/product-title?q=dao'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.product = data;
      })
  }
}
