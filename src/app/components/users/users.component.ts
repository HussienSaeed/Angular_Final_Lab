import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any;
  // userService: any;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }
  removeUser(userId: number) {
    this.userService.deleteUser(userId).subscribe((response) => {
      this.users = this.users.filter((user: any) => user.id != userId);
    });
  }
}
