import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';
import * as alertfy from 'alertifyjs';
import { AlertyfyService } from 'src/app/shared/services/alertyfy.service';
import { Propertybase } from 'src/app/shared/interfaces/propertybase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user!: User;
  flagSubmitted! : boolean;

  propertyview : Propertybase = {
    Id:'',
    name:'',
    ptype: '',
    ftype:'',
    BHK:0,
    builtArea:'',
    city:'',
    RTM:'',
    price:'',
    sellrent:1,

  }

  constructor(private userService:UserService,private altertyfyService: AlertyfyService){}

  ngOnInit(): void {
    this.registrationForm = new FormGroup(
      {
        userName : new FormControl('Hasnain',Validators.required),
        email: new FormControl(null,[Validators.required,Validators.email]),
        password: new FormControl(null,[Validators.required,Validators.minLength(6)]),
        confirmPassword: new FormControl(null,Validators.required),
        mobile: new FormControl(null,[Validators.required,Validators.minLength(11)])
      }, this.passwordMatchingValidator);
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.flagSubmitted = true;
    if(this.registrationForm.valid)
    {
      this.user = <User>this.registrationForm.value;
      this.userService.saveUserDataToLocalStorage(this.user);
      this.registrationForm.reset();
      this.flagSubmitted = false;
      this.altertyfyService.success('Congrate! User is registerd successfully');
    //  alertfy.success('Congrate! User is registerd successfully');
    }else{
      this.altertyfyService.error('User failed to register unfortunitately' );

    }
    //  alertfy.error('User failed to register' );

    /* var array = JSON.parse(localStorage.getItem('Users') || '[]');
    array.push(this.user);
    localStorage.setItem('Users', JSON.stringify(array)); */

   // localStorage.setItem('Users',JSON.stringify(this.user));
  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null : { notmatched: true }
  }
  //getter methods for form fields
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

}
