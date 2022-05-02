import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import * as constants from '../../../classes/constants';
import { Event } from '../../../classes/event';
import { EventService } from '../event.service';
import { SuccessModalComponent } from '../../modal/success-modal.component';

export interface PaymentDTO{
  custID?:String;
  paymentMethodDesc?:String;
  amountPaid?:any;
  eventID?:String;
  verify?:boolean;
}

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss', '../event.scss']
})
export class EventDetailComponent implements OnInit {
  testUserID: string;
  eventID: string;
  currentEvent: Event;
  paymentDetails: PaymentDTO = {};

  registrationStatus: string = constants.registrationStatus.NEW;
  showRegisterButton: Boolean;
  showPaymentButton: Boolean;
  showFeedbackButton: Boolean;
  showCancelButton: Boolean;

  constructor(private route: ActivatedRoute, private eventService : EventService, private _location: Location,private router:Router) {
    this.route.queryParams.subscribe(params => {
        this.eventID = params['eventID'];
      }
    );
  }

  ngOnInit(): void {
    this.testUserID = sessionStorage.getItem('custID');
    console.log(this.testUserID);
    this.eventService.getEventDetail(this.eventID).then((data) => {
      this.currentEvent = data;
      console.log(data);
      this.registrationStatus = this.currentEvent.currentUserRegistrationStatus;
      this.showRegisterButton = (this.registrationStatus == constants.registrationStatus.NEW); 
      this.showPaymentButton = (this.registrationStatus == constants.registrationStatus.REGISTERED); 
      this.showFeedbackButton = (this.registrationStatus == constants.registrationStatus.EVENT_FINISHED); 
      this.showCancelButton = ((this.registrationStatus == constants.registrationStatus.REGISTERED) ||
                                    (this.registrationStatus == constants.registrationStatus.PAID)); 
      console.log(this.currentEvent);
    });
  }

  registerEvent(): void {
    console.log("register");
    this.eventService.registerToEvent(this.eventID, this.testUserID).then((data) => {
      console.log(data);
      window.location.reload();
    });
  }

  cancelEvent(): void {
    console.log("cancel");
    this.eventService.cancelEvent(this.eventID, this.testUserID).then((data) => {
      console.log(data);
      window.location.reload();
    });
  }

  writeFeedback(): void {
    console.log("writing feedback");
    this.router.navigate(["feedback"], 
        {queryParams: {
            eventID: this.currentEvent.eventID,
            eventSerialNumber: this.currentEvent.eventSerialNumber
          }});
  }

  makePayment(): void {
    this.showFeedbackButton=true;
    console.log("making payment");
    this.paymentDetails.custID=this.testUserID;
    this.paymentDetails.paymentMethodDesc="Wallet";
    this.paymentDetails.amountPaid=this.currentEvent.price.toString();
    this.paymentDetails.eventID=this.currentEvent.eventID;
    console.log(this.paymentDetails);
    this.eventService.makePayment(this.paymentDetails).subscribe((val:any)=>{
      this.paymentDetails = val;
      console.log(val);
      if (this.paymentDetails.verify == true){
        alert('Payment Was Successful');
        window.location.reload();
      }
      else{
        alert('Insufficient Balance');
        this.router.navigate(['/wallet']);
      }
    });
    this.showPaymentButton = false;
  }

  viewFeedbacks(): void {
    this.router.navigate(['viewfeedback'], {queryParams: {eventID: this.currentEvent.eventSerialNumber}});
  }

  goback(): void {
    this._location.back();
  }
}
