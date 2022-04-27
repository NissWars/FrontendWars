import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as constants from '../../../classes/constants';
import { Event } from '../../../classes/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  eventID: string;
  currentEvent: Event;

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
}
