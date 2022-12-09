import {Component} from "@angular/core";
@Component({
  selector: 'informationshop',
  templateUrl: './informationshop.component.html',
  styleUrls: ['./informationshop.component.css']
})
export class InformationshopComponentComponent{
  thank() {
    alert('Cảm ơn quý khách đã mua hàng');
  }
}
