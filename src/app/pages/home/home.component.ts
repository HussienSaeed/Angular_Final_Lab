import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { productList } from 'src/app/models/productList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products:Iproduct[];
  
  constructor(){
    this.products = productList
  }
}
