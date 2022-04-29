import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import * as constants from '../../../classes/constants';
import * as moment from 'moment';
import { Event } from '../../../classes/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss', '../event.scss']
})
export class EventListComponent implements OnInit {
  testUserID: string = "20220420000000000000";
  resultEventList: Event[];

  constructor(private route: ActivatedRoute, private eventService : EventService) { }

  ngOnInit(): void {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("customerID", this.testUserID);

    this.eventService.getEventListByParam(queryParams).then((data) => {
      this.resultEventList = data;
      this.resultEventList.sort((a,b) => 
        (moment(a.startTime, constants.DATETIME_FORMAT).toDate() < moment(b.startTime, constants.DATETIME_FORMAT).toDate()) ? 1 :
          ((moment(a.startTime, constants.DATETIME_FORMAT).toDate() > moment(b.startTime, constants.DATETIME_FORMAT).toDate()) ? -1 : 0));
    });
  }

  
}
