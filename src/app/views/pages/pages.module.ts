import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';

import { accountCreationComponent } from './accountCreation/accountCreation.component'; //kerrichanged
import { getPasswordComponent } from './getPassword/getPassword.component'; //kerrichanged
import { registerOrganizerComponent } from './registerOrganizer/registerOrganizer.component'; //kerrichanged
import { FormsModule } from '@angular/forms'; //kerrichanged

import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    accountCreationComponent, //kerrichanged
    getPasswordComponent, //kerrichanged
    registerOrganizerComponent //kerrichanged
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule //kerrichanged
  ]
})
export class PagesModule {
}
