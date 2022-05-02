import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

export interface RegisterDTO{
  repName?:String;
  username?:String;
  mobile?: number;
  email?: any;
  coyDetails?: any;
  pw?: any;
  pw2?: any;

  registerSuccess?: boolean;
}

@Component({
  selector: 'app-registerOrganizer',
  templateUrl: './registerOrganizer.component.html',
  styleUrls: ['./registerOrganizer.component.scss']
})

export class registerOrganizerComponent{

  customStylesValidated = false; //kerrichanged

  repName: any;
  username: any;
  mobile: number;
  email: any;
  coyDetails: any;
  pw: any;
  pw2: any;



  constructor( private router: Router ) { }

  onSubmit1() {
    this.customStylesValidated = true;
    console.log(this.repName);
    console.log(this.username);
    console.log(this.mobile);
    console.log(this.email);
    console.log(this.coyDetails);
    console.log(this.pw);
    console.log(this.pw2);

    console.log('Saving registration...');


  }
  
  //kerrichanged
  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }




}


