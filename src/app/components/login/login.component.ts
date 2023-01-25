import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  recTrack:string = '';
trackNames:string[]= ['Front-End','Back-End','Open Source','AI']
  constructor(){}
}
