import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  customStylesValidated = false
  username: any;
  pw: any;

  constructor() { }

  onSubmit1() {
    this.customStylesValidated = true;
    console.log('login...');

  }

}
