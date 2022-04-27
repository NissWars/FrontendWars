
import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms' //kerrichangedvalidate

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
  savebox1:boolean;
  savebox2:boolean;
  savebox3:boolean;
  savebox4:boolean;
  savebox5:boolean;
  savebox6:boolean;
  saveboxAgree:boolean;

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
    console.log(this.savebox1);
    console.log(this.savebox2);
    console.log(this.savebox3);
    console.log(this.savebox4);
    console.log(this.savebox5);
    console.log(this.savebox6);
    console.log(this.saveboxAgree);
  }
  
  //kerrichanged
  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

   onSaveCheckboxChanged(value:boolean){
    this.savebox1 = value;
    this.savebox2 = value;
    this.savebox3 = value;
    this.savebox4 = value;
    this.savebox5 = value;
    this.savebox6 = value;
}

onSaveCheckbox(value:boolean){
    this.saveboxAgree = value;

}

}


