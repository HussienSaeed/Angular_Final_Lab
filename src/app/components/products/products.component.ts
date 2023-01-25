import { Iproduct } from './../../models/iproduct';
import { productList } from './../../models/productList';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:Iproduct[];
  
  constructor(){
    this.products = productList
  }
  @Input() productList :Iproduct[]=[];
  ngOnInit(): void {
  }

}
