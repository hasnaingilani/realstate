import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyformComponent } from './myform/myform.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { MaterialCardComponent } from './property/material-card/material-card.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyRentComponent } from './property/property-rent/property-rent.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'propertylist',pathMatch:'full'},
  {path:'propertylist',component:PropertyListComponent},
  {path:'propertycard',component:PropertyCardComponent},
  {path:'myform',component:MyformComponent},
  {path:'materialcard',component:MaterialCardComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'property-rent',component:PropertyRentComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
