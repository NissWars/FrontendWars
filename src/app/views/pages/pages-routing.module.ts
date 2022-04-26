import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'

import { profileComponent } from './profile/profile.component';
import { profileOrganizerComponent } from './profileOrganizer/profileOrganizer.component';
import { accountCreationComponent } from './accountCreation/accountCreation.component';
import { registerOrganizerComponent } from './registerOrganizer/registerOrganizer.component';
import { resetPasswordComponent } from './resetPassword/resetPassword.component';
//import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'profile',
    component: profileComponent,
    data: {
      title: 'Profile Page'
    }
  },
  {
    path: 'profileOrganizer',
    component: profileOrganizerComponent,
    data: {
      title: 'Profile Organizer Page'
    }
  },
  {
    path: 'accountCreation',
    component: accountCreationComponent,
    data: {
      title: 'Account Creation Page'
    }
  },
  { //kerrichanged
    path: 'registerOrganizer',
    component: registerOrganizerComponent,
    data: {
      title: 'Register Organizer Page'
    }
  },
  { //kerrichanged
    path: 'resetPassword',
    component: resetPasswordComponent,
    data: {
      title: 'Reset Password Page'
    }
  }
  /*
  { //kerrichanged
    path: 'SignUp',
    component: SignUpComponent,
    data: {
      title: 'Sign Up'
    }
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes),MatDatepickerModule,MatNativeDateModule,MatIconModule],
  exports: [RouterModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatIconModule]
})
export class PagesRoutingModule {
}
