import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';

const routes: Routes = [
   {path: "login", component:LoginComponent},
  {path: "signup", component:SignUpComponent},
  {path: "admin/dashboard", component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
