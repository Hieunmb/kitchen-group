import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent{
  p: number = 1;
  product: any[] = [
    { id: 0, title: 'trung', price: '12', thumbnail: 'adsd', description: 'haha', category_id: '12', brand_id: 'hani'},
  ];
  constructor(private http: HttpClient) {

  }
  ngOnInit(){
    this.demoproduct();
  }
  demoproduct() {
    const url = 'http://localhost:5001/product2'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.product = data;
      })
  }
  onActive() {
    window.scroll(0, 0);
  }
}
