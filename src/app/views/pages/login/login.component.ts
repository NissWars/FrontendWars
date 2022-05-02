import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { cilArrowBottom, cilArrowTop } from '@coreui/icons';
import { LoginService } from './login.service';
import { DatePipe } from '@angular/common'
import { stringify } from '@angular/compiler/src/util';
import { Router, RouterLink } from '@angular/router';

export interface LoginDTO{
  email?: any;
  pw?: any;
  custId?: any;
  login: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  customStylesValidated = false
  email: any;
  pw: any;
  detail: LoginDTO = {login:false};

  constructor(private loginService: LoginService, private router: Router) {
    }
  ngOnInit(): void {
  }
  saveLogin() {
    console.log('login...');
    console.log(this.email);
    console.log(this.pw);
    this.customStylesValidated = true;
    this.detail.email= this.email;
    this.detail.pw = this.pw;

    //service 
    this.loginService.saveLogin(this.detail).subscribe((val:any)=>{
      this.detail = val;
      if (this.detail.login == true){
        console.log(sessionStorage.getItem('custID')); 
        sessionStorage.setItem('custID',this.detail.custId);
        this.router.navigateByUrl('/randomizer');
      }
      else{
        alert('Incorrect Email or Password');
      }
    },response=>{console.log(response);});

  }

}
