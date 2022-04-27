import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';

import { accountCreationComponent } from './accountCreation/accountCreation.component'; //kerrichanged
import { registerOrganizerComponent } from './registerOrganizer/registerOrganizer.component'; //kerrichanged
import { profileComponent } from './profile/profile.component'; //kerrichanged
import { profileOrganizerComponent } from './profileOrganizer/profileOrganizer.component'; //kerrichanged
import { resetPasswordComponent } from './resetPassword/resetPassword.component'; //kerrichanged
//import { SignUpComponent } from './sign-up/sign-up.component';


import { FormsModule } from '@angular/forms'; //kerrichanged
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    accountCreationComponent, //kerrichanged
    registerOrganizerComponent, //kerrichanged
    profileComponent,
    profileOrganizerComponent,
    resetPasswordComponent
    //SignUpComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule, //kerrichanged
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ]
})
export class PagesModule {
}
