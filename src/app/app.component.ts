import { productList } from './models/productList';
import { Component } from '@angular/core';
import { Iproduct } from './models/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greetingsFchild:string = '';
  products:Iproduct[];
  constructor(){
    this.products = productList;
  }
  title = 'Lab3';
  userName:string = 'Hussien Saeed';
  isOpened:boolean = false;
  imgSrc = 'assets/images/2.jpg'
  parentData:string = 'Data from parent'

  getData(e:string){
this.greetingsFchild = e;
  }
}
