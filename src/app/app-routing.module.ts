import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { SystemUsersComponent } from './admin/component/system-users/system-users.component';
import { UserManagementComponent } from './admin/component/user-management/user-management.component';
import { AdminComponent } from './theme/layout/admin/admin/admin.component';
import { CreateUserComponent } from './admin/component/create-user/create-user.component';

const routes: Routes = [
  // Public routes
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },

  // Admin layout routes
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: DashboardComponent },
      { path: 'system', component: SystemUsersComponent },
      { path: 'system/user', component: UserManagementComponent },
      { path: 'createUser', component: CreateUserComponent },
    ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
