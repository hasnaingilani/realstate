import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MyformComponent } from './myform/myform.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialCardComponent } from './property/material-card/material-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyRentComponent } from './property/property-rent/property-rent.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { PropertydetailResolver } from './propertydetail.resolver';
import { FilterpropertiesPipe } from './shared/pipes/filterproperties.pipe';
import { SortpropertiesPipe } from './shared/pipes/sortproperties.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    MyformComponent,
    MaterialCardComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    PropertyRentComponent,
    RegisterComponent,
    LoginComponent,
    FilterpropertiesPipe,
    SortpropertiesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule


  ],
  exports:[MaterialModule],
  providers: [PropertydetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
