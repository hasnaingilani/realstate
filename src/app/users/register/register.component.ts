import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userName : new FormControl('Hasnain',Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl(null,Validators.required),
      mobile: new FormControl(null,[Validators.required,Validators.minLength(11)])
    });
  }
  onSubmit(){
    console.log(this.registrationForm);

  }

}
