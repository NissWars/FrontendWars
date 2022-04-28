import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as constants from '../../../classes/constants';
import { Event } from '../../../classes/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss', '../event.scss']
})
export class EventDetailComponent implements OnInit {
  testUserID: string = "20220420000000000000";
  eventID: string;
  currentEvent: Event;

  registrationStatus: string = constants.registrationStatus.NEW;
  showRegisterButton: Boolean;
  showPaymentButton: Boolean;
  showFeedbackButton: Boolean;
  showCancelButton: Boolean;

  constructor(private route: ActivatedRoute, private eventService : EventService) {
    this.route.queryParams.subscribe(params => {
        this.eventID = params['eventID'];
      }
    );
  }

  ngOnInit(): void {
    this.eventService.getEventDetail(this.eventID).then((data) => {
      this.currentEvent = data;
      this.registrationStatus = this.currentEvent.currentUserRegistrationStatus;

      this.showRegisterButton = (this.registrationStatus == constants.registrationStatus.NEW); 
      this.showPaymentButton= (this.registrationStatus == constants.registrationStatus.REGISTERED); 
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
    });
  }

  cancelEvent(): void {
    console.log("cancel");
  }

  writeFeedback(): void {
    console.log("writing feedback");
  }

  makePayment(): void {
    console.log("making payment");
  }
}
