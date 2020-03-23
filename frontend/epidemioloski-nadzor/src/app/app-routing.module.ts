import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patients/patient/patient.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'register-patient', component: PatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
