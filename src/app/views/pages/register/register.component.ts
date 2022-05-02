
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
  tag1?: any;
  tag2?: any;
  tag3?: any;
  tag4?: any;
  tag5?: any;
  registerSuccess?: boolean;
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
  registerdto: RegisterDTO={registerSuccess: false};

  constructor(private registerService: RegisterService, private router: Router ) { }

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




  
    console.log('Saving registration...');
    this.registerdto.firstName= this.firstname;
    this.registerdto.lastName = this.lastname;
    this.registerdto.username = this.username;
    this.registerdto.mobile = this.mobile;
    this.registerdto.dob = this.dob;
    this.registerdto.email = this.email;
    this.registerdto.pw = this.pw;
    this.registerdto.pw2 = this.pw2;
    this.registerdto.tag1 = this.Symposiums;
    this.registerdto.tag2 = this.Exhibitions;
    this.registerdto.tag3 = this.Concerts;
    this.registerdto.tag4 = this.Dining;
    this.registerdto.tag5 = this.Sports;

    //service 
    this.registerService.onSubmit1(this.registerdto).subscribe((val:any)=>{
      this.registerdto = val;
      if (this.registerdto.registerSuccess == true){
        sessionStorage.setItem('email',this.registerdto.email);
        this.router.navigate(['/accountCreation']);
      }
      else{
        alert('User already exists!');
      }
    },response=>{console.log(response);});

  



   
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


