import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms' //kerrichangedvalidate

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent{

  customStylesValidated = false; //kerrichanged

  constructor( ) { }

  //ngOnInit(): void { } //kerrichanged
  
  //kerrichanged
  onSubmit1() {
    this.customStylesValidated = true;
    console.log('Submit... 1');
  }
  
  //kerrichanged
  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

}

