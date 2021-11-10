import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveUserDataToLocalStorage(user:User){
    var array = JSON.parse(localStorage.getItem('Users') || '[]');
    array.push(user);
    localStorage.setItem('Users', JSON.stringify(array));
  }

}
