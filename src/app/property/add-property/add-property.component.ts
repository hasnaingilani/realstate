import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Property } from 'src/app/shared/interfaces/property';
import { Propertybase } from 'src/app/shared/interfaces/propertybase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs?: TabsetComponent;
 // @ViewChild('Form')  addPropertyForm?: NgForm;
 // @ViewChild('Form')  addPropertyForm?: NgForm;
  AddPropertyForm!: FormGroup;
  isSubmitted: boolean = false;

  propertyType : Array<string> = ['House','Apartment','Duplex'];
  furnishType : Array<string> = ['Fully','Semi','Unfurnished'];
  readytomove : Array<string> = ['East','West','South','North'];
  propertyview : Propertybase = {
    Id:'',
    name:'',
    ptype: '',
    ftype:'',
    BHK:'',
    builtArea:'',
    city:'',
    RTM:'',
    price:'',
    sellrent:1,

  }


  constructor(private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createAddPropertyForm();
  }
  onsave(){
    this.router.navigate(['/']);
  }
  onSubmit(){
    /* this.isSubmitted = true;
    if(!this.AddPropertyForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.AddPropertyForm.value))
      console.log(this.AddPropertyForm.value)
      return true;
    } */
    console.log(this.AddPropertyForm.value)

  }
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  createAddPropertyForm(){
    this.AddPropertyForm = this.fb.group({

      sellrent: new FormControl('' ,Validators.required),
      BHK: [null, Validators.required],
      ptype: [null, Validators.required],
      ftype: [null, Validators.required],
      name: [null, Validators.required],
      city: [null, Validators.required]
    })
  }

  get myForm() {
    return this.AddPropertyForm.get('SellRent');
  }
  changeEvent(e:any){
    console.log(e.target.value);
  }

}
