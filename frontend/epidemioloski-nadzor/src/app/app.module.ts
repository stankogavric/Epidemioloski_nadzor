import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientComponent } from './patients/patient/patient.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientComponent,
    RegisterComponent,
    LoginComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
