import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyformComponent } from './myform/myform.component';
import { MaterialCardComponent } from './property/material-card/material-card.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

const routes: Routes = [
  {path:'propertycard',component:PropertyCardComponent},
  {path:'propertylist',component:PropertyListComponent},
  {path:'myform',component:MyformComponent},
  {path:'materialcard',component:MaterialCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
