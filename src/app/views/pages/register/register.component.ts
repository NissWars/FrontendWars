
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms' //kerrichangedvalidate
import { cilArrowBottom, cilArrowTop } from '@coreui/icons';
import { RegisterService } from './register.service';
import { DatePipe } from '@angular/common'
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

export interface RegisterDTO{
  firstName?:String;
  lastName?:String;
  username?:String;
  mobile?: number;
  dob?: number;
  email?: any;
  pw?: any;
  pw2?: any;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent{

  customStylesValidated = false; //kerrichanged

  firstname: any;
  lastname: any;
  username: any;
  mobile: number;
  dob: number;
  email: any;
  pw: any;
  pw2: any;
  Symposiums: string;
  Exhibitions:string;
  Concerts:string;
  Dining:string;
  Sports:string;
  //saveboxAgree:boolean;
  registerdto: RegisterDTO={};

  constructor( ) { }

  //ngOnInit(): void { } //kerrichanged
  onSubmit1() {
    this.customStylesValidated = true;
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.username);
    console.log(this.mobile);
    console.log(this.dob);
    console.log(this.email);
    console.log(this.pw);
    console.log(this.pw2);
    console.log(this.Symposiums ? 'Symposiums' : null);
    console.log(this.Exhibitions ? 'Exhibitions' :null);
    console.log(this.Concerts ? 'Concerts' : null);
    console.log(this.Dining ? 'Dining' : null);
    console.log(this.Sports ? 'Sports' : null);
  // console.log(this.saveboxAgree);

  const emittedOptions = {
    Symposiums: this.Symposiums ? 'Symposiums' : 'false',
    Exhibitions: this.Exhibitions ? 'Exhibitions' : 'false',
    Concerts: this.Concerts ? 'Concerts' : 'false',
    Dining: this.Dining ? 'Dining' : 'false',
    Sports: this.Sports ? 'Sports' : 'false',
    }
    this.options.emit(emittedOptions);
   // alert("Preferences selected: \n\n" + JSON.stringify(emittedOptions, null, 4));

  }
  
  //kerrichanged
  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

/*
   onSaveCheckboxChanged(value:boolean){

    this.Symposiums = value;
    this.Exhibitions = value;
    this.Concerts = value;
    this.Dining = value;
    this.Sports = value;
}*/

/*
onSaveCheckbox(value:boolean){
    this.saveboxAgree = value;
}*/

@Output() options = new EventEmitter<{
  Symposiums: string;
  Exhibitions: string;
  Concerts: string;
  Dining: string;
  Sports: string;
}>();

result: {
  Symposiums: boolean;
  Exhibitions: boolean;
  Concerts: boolean;
  Dining: boolean;
  Sports: boolean;
} = {
  Symposiums: true,
  Exhibitions: true,
  Concerts: true,
  Dining: true,
  Sports: true
};

}


