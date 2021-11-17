import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Property } from 'src/app/shared/interfaces/property';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs?: TabsetComponent;

  propertyType : Array<string> = ['House','Apartment','Duplex'];
  furnishType : Array<string> = ['Fully','Semi','Unfurnished'];
  readytomove : Array<string> = ['East','West','South','North'];
  propertyview:Property = {
    Id:'',
    name:'',
    type: '',
    price:'',
    sellrent:1,

  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onsave(){
    this.router.navigate(['/']);
  }
  onSubmit(form:NgForm){
    console.log(form);
  }
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

}
