import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private autService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }
  islogin(){
    return localStorage.getItem('token');
  }
  logout(){
    this.autService.logout();
    this.router.navigate(['login']);
  }
}
