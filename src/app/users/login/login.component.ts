import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { AlertyfyService } from 'src/app/shared/services/alertyfy.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;
  constructor(private authService:AuthService,
              private alertyfy:AlertyfyService,
              private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(form:NgForm){
    console.log(form.value);
    this.user = <User>form.value;
    const token = this.authService.authUser(this.user);
    if(token){
      localStorage.setItem('token',token!.email);
      this.alertyfy.success('User successfully login');
      this.router.navigate(['/']);
  }
    else
      this.alertyfy.error('User Unsuccessful');
  }

}
