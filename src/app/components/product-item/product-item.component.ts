import { Iproduct } from './../../models/iproduct';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  constructor(){}
  @Input() productItem :Iproduct = {
    id: 0,
    title: '',
    price: 0,
    quantity: 0,
    imgSrc: '',
    desc: ''
  }
  ngOnInit(): void {
  }

}
