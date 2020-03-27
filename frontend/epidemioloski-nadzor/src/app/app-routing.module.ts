import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RoleGuard } from './auth/role.guard';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patients/patient/patient.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'register', component: RegisterComponent, 
    canActivate: [RoleGuard], data: { expectedRoles: ['admin'] } },
  { path: 'patients', component: PatientsComponent, 
  canActivate: [RoleGuard], data: { expectedRoles: ['student', 'lekar', 'mup', 'krizniStab'] } },
  { path: 'register-patient', component: PatientComponent, 
  canActivate: [RoleGuard], data: { expectedRoles: ['student', 'lekar'] } },
  { path: 'edit-patient/:id', component: PatientComponent, 
  canActivate: [RoleGuard], data: { expectedRoles: ['student', 'lekar', 'mup'] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
