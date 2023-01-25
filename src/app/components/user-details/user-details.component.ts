import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  userId: any;
  user: any;
constructor(private activatedRoute : ActivatedRoute, private userService : UserService){
  this.userId = this.activatedRoute.snapshot.params['id'];

}
ngOnInit(): void {
  this.userService.getUser(this.userId).subscribe((response) => {
    this.user = response;
  });
}}
