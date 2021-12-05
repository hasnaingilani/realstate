import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

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
  nextClicked!:boolean;

  /* propertyType : Array<string> = ['House','Apartment','Duplex'];
  furnishType : Array<string> = ['Fully','Semi','Unfurnished']; */
  readytomove : Array<string> = ['East','West','South','North'];
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


  constructor(private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createAddPropertyForm();
  }
  onsave(){
    this.router.navigate(['/']);
  }
  onSubmit(){
    this.nextClicked = true;
    if(this.BasicInfo.invalid){
      this.staticTabs!.tabs[0].active = true;
      return;
    }
    if(this.PriceInfo.invalid){
      this.staticTabs!.tabs[1].active = true;
      return;
    }
    console.log(this.AddPropertyForm)

  }
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
  moveNextTab(tabId: number, IsCurrentTabValid:boolean) {
    this.nextClicked = true;
    if(IsCurrentTabValid){
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
  }

  createAddPropertyForm(){
    this.AddPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        sellrent: [null , Validators.required],
        BHK: [null, Validators.required],
        ptype: [null, Validators.required],
        ftype: [null, Validators.required],
        name: [null, Validators.required],
        city: [null, Validators.required]
      }),

      PriceInfo: this.fb.group({
        price: [null, Validators.required],
        builtArea: [null, Validators.required],
        carpetArea: [null],
        security: [null],
        maintenance: [null],
      }),

      AddressInfo: this.fb.group({
        floorNo: [null],
        totalFloor: [null],
        address: [null, Validators.required],
        landMark: [null],
      }),

      OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        possessionOn: [null,Validators.required],
        AOP: [null,Validators.required],
        gated: [null],
        mainEntrance: [null],
        description: [null]
      })
      });

  }

  get myForm() {
    return this.AddPropertyForm.get('SellRent');
  }
  get BasicInfo(){
    return this.AddPropertyForm.controls.BasicInfo as FormGroup;
  }
  get PriceInfo() {
    return this.AddPropertyForm.controls.PriceInfo as FormGroup;
  }

  get AddressInfo() {
    return this.AddPropertyForm.controls.AddressInfo as FormGroup;
  }

  get OtherInfo() {
    return this.AddPropertyForm.controls.OtherInfo as FormGroup;
  }


/*getter methode for validation */

  get SellRent() {
    return this.BasicInfo.controls.sellrent as FormControl;
  }
  get BHK() {
    return this.BasicInfo.controls.BHK as FormControl;
  }
  get PType() {
    return this.BasicInfo.controls.ptype as FormControl;
  }

  get FType() {
    return this.BasicInfo.controls.ftype as FormControl;
  }

  get Name() {
    return this.BasicInfo.controls.name as FormControl;
  }

  get City() {
    return this.BasicInfo.controls.city as FormControl;
  }

  get Price() {
    return this.PriceInfo.controls.price as FormControl;
  }

  get BuiltArea() {
    return this.PriceInfo.controls.builtArea as FormControl;
  }

  get CarpetArea() {
    return this.PriceInfo.controls.carpetArea as FormControl;
  }

  get Security() {
    return this.PriceInfo.controls.security as FormControl;
  }

  get Maintenance() {
    return this.PriceInfo.controls.maintenance as FormControl;
  }

  get FloorNo() {
    return this.AddressInfo.controls.floorNo as FormControl;
  }

  get TotalFloor() {
    return this.AddressInfo.controls.totalFloor as FormControl;
  }

  get Address() {
    return this.AddressInfo.controls.address as FormControl;
  }

  get LandMark() {
    return this.AddressInfo.controls.landMark as FormControl;
  }

  get RTM() {
    return this.OtherInfo.controls.RTM as FormControl;
  }

  get PossessionOn() {
    return this.OtherInfo.controls.possessionOn as FormControl;
  }

  get AOP() {
    return this.OtherInfo.controls.AOP as FormControl;
  }

  get Gated() {
    return this.OtherInfo.controls.gated as FormControl;
  }

  get MainEntrance() {
    return this.OtherInfo.controls.mainEntrance as FormControl;
  }

  get Description() {
    return this.OtherInfo.controls.description as FormControl;
  }


  changeEvent(e:any){
    console.log(e.target.value);
  }

}
