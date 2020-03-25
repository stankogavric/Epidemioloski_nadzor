import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RoleGuard } from './auth/role.guard';
import { PatientsComponent } from './patients/patients.component';
import { PatientComponent } from './patients/patient/patient.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { 
  //   path: 'register', component: RegisterComponent, 
  //   canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR'] } 
  // },
  { path: 'patients', component: PatientsComponent, 
  canActivate: [RoleGuard], data: { expectedRoles: ['student', 'lekar', 'mup', 'krizniStab'] } },
  { path: 'register-patient', component: PatientComponent, 
  canActivate: [RoleGuard], data: { expectedRoles: ['student', 'lekar'] } },
  { path: 'edit-patient/:jmbg', component: PatientComponent, 
  canActivate: [RoleGuard], data: { expectedRoles: ['student', 'lekar'] } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
