import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ResolvedComponent } from './resolved/resolved.component';
import { PendingComponent } from './pending/pending.component';
import { SubmitComponent } from './submit/submit.component';
const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employee/:id', component: EmployeeComponent},
  {path: 'resolved', component: ResolvedComponent},
  {path: 'pending', component: PendingComponent},
  {path: 'submit', component: SubmitComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
