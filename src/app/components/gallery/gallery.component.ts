import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  imgSrc:string;
  count:number = 0;
  arrOfImages : string[] = ['assets/images/1.jpg','assets/images/2.jpg','assets/images/3.jpg']
  constructor(){
    this.imgSrc = this.arrOfImages[0];
  }
  nextPic(e:Event){
    this.count++;
    if(this.count === this.arrOfImages.length){
      this.count= 0;
    }
    this.imgSrc = this.arrOfImages[this.count]
  }

}
