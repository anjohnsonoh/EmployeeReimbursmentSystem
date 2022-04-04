import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ResolvedComponent } from './resolved/resolved.component';
import { SubmitComponent } from './submit/submit.component';
import { PendingComponent } from './pending/pending.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EmployeeComponent,
    ManagerComponent,
    LoginComponent,
    ResolvedComponent,
    SubmitComponent,
    PendingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
