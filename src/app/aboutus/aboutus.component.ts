import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent{

  product: any[] = [
    { id: 20},
  ];category: any[] = [
    { id: 20},
  ];brand: any[] = [
    { id: 20},
  ];
  constructor(private http: HttpClient) {

  }
  ngOnInit(){
    this.demoproductcount();
    this.democategorycount();
    this.demobrandcount();
  }
  demoproductcount() {
    const url = 'http://localhost:5001/count-product'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.product = data;
      })
  }democategorycount() {
    const url = 'http://localhost:5001/count-category'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.category = data;
      })
  }demobrandcount() {
    const url = 'http://localhost:5001/count-brand'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.brand = data;
      })
  }


}
