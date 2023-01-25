import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userId:any;
constructor(private router : Router,
  private userService : UserService,
  private activatedRoute: ActivatedRoute

  ){
    this.userId = this.activatedRoute.snapshot.params['id'];
  }
loginForm = new FormGroup ({
  name: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]{4,15}$/)]),
  email: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_.-]{2,15}@[a-z]{2,10}.com$/)]),
  password: new FormControl('',[Validators.required,Validators.min(6)]),
});
get getName(){
return this.loginForm.controls['name']
}
get getEmail(){
return this.loginForm.controls['email']
}
get getPassword(){
return this.loginForm.controls['password']
}
login(e:any){
  // e.preventDefault();
if(this.loginForm.status == 'VALID'){
  this.userService.addUser(this.loginForm.value).subscribe((response) => {
    console.log(response);
  });
  this.router.navigate(['/users'])
}
}
}
