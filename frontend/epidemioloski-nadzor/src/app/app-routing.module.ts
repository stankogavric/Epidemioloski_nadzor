import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patients/patient/patient.component';


const routes: Routes = [
  { path: 'patients', component: PatientsComponent },
  { path: 'register-patient', component: PatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
