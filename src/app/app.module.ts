import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { LoginComponent } from './auth/component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { FooterComponent } from './theme/layout/admin/footer/footer.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavBarLeftComponent } from './theme/layout/admin/nav-bar/nav-bar-left/nav-bar-left.component';
import { NavBarRightComponent } from './theme/layout/admin/nav-bar/nav-bar-right/nav-bar-right.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-bar-left/nav-search/nav-search.component';
import { AdminComponent } from './theme/layout/admin/admin/admin.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SystemUsersComponent } from './admin/component/system-users/system-users.component';
import { UserManagementComponent } from './admin/component/user-management/user-management.component';
import { SharedComponent } from './theme/layout/shared/shared.component';
import { BreadcrumbComponent } from './theme/layout/shared/component/breadcrumb/breadcrumb.component';
import { CardComponent } from './theme/layout/shared/component/card/card.component';
import { CreateUserComponent } from './admin/component/create-user/create-user.component';





@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    NavBarComponent,
    NavBarLeftComponent,
    NavBarRightComponent,
    NavSearchComponent,
    AdminComponent,
    NavigationComponent,
    NavContentComponent,
    NavCollapseComponent,
    NavGroupComponent,
    NavItemComponent,
    SystemUsersComponent,
    UserManagementComponent,
    SharedComponent,
    BreadcrumbComponent,
    CardComponent,
    CreateUserComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    NgbDropdownModule,
    NgbModule,
   
     
  ],
 
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
