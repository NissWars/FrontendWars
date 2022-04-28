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
  eventID: string;
  currentEvent: Event;

  registrationStatus: string = constants.registrationStatusNew;
  showRegisterButton: Boolean = (this.registrationStatus == constants.registrationStatusNew); 
  showPaymentButton: Boolean = (this.registrationStatus == constants.registrationStatusRegistered); 
  showFeedbackButton: Boolean = (this.registrationStatus == constants.registrationStatusComplete); 
  showCancelButton: Boolean = ((this.registrationStatus == constants.registrationStatusRegistered) ||
                                 (this.registrationStatus == constants.registrationStatusPaid)); 

  constructor(private route: ActivatedRoute, private eventService : EventService) { 
    this.route.queryParams.subscribe(params => {
        this.eventID = params['eventID'];
      }
    );
  }

  ngOnInit(): void {
    this.eventService.getEventDetail(this.eventID).then((data) => {
      this.currentEvent = data;
      console.log(this.currentEvent);
    });
  }

  registerEvent(): void {
    console.log("register");
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
