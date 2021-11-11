import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  array:User[] = [];

  constructor() { }
  authUser(user:User){
    if(localStorage.getItem('Users')){
      this.array = JSON.parse(localStorage.getItem('Users') || '[]');
    }
    return this.array.find(p => p.email == user.email && p.password == user.password);
  }
  logout(){
      localStorage.removeItem('token');
  }
}
