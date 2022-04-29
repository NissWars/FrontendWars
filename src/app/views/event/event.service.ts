import { LOCALE_ID, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as constants from '../../classes/constants';
import { Event } from '../../classes/event';
import { Tag } from '../../classes/tag';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventDetailUrl = "details/";
  private eventRegisterUrl = "register/";

  constructor(private http: HttpClient, @Inject(LOCALE_ID) private locale: string) { 

  }

  public getEventDetail(eventID: string): any {
    let urlToGet = constants.backendBaseUrl + constants.backendEventUrl + this.eventDetailUrl; 
    let eventDetail: Event;

    return new Promise((resolve) => {
      let queryParams = new HttpParams();
      queryParams = queryParams.append("eventID",eventID);

      this.http.get(urlToGet, {params: queryParams}).pipe(take(1)).subscribe(data => {
        let tags : Tag[] = [];

        eventDetail = data;
        if (data.hasOwnProperty('eventTags')) {
          data["eventTags"].forEach(element => {
            let newTag: Tag = new Tag();
            newTag.tagID = element["tag"]["tagID"];
            newTag.tagName = element["tag"]["tagName"];
            tags.push(newTag);
          });

          eventDetail.eventTags = tags;
          eventDetail.organizerObj = data["organizer"];
          eventDetail.organizer = data["organizer"]["organizerID"];
        }
        else {
          eventDetail.eventTags = null;
        }

        if (data.hasOwnProperty("eventRegistrations")) {
          if (Object.keys(data["eventRegistrations"]).length > 0) {
            let registrationInfo = data["eventRegistrations"][0];

            if (registrationInfo["paymentStatus"] == false) {
              eventDetail.currentUserRegistrationStatus = constants.registrationStatus.REGISTERED;
            } else if (registrationInfo["completionStatus"] == false) {
              if (new Date() > eventDetail.startTime) {
                eventDetail.currentUserRegistrationStatus = constants.registrationStatus.EVENT_FINISHED;
              } else {
                eventDetail.currentUserRegistrationStatus = constants.registrationStatus.PAID;
              }
            } else {
              eventDetail.currentUserRegistrationStatus = constants.registrationStatus.FEEDBACK_FINISHED;
            }
          }
        }
        
        resolve(eventDetail);
      });
    });
  }

  public registerToEvent(eventID: string, userID: string): any{
    let urlToPost = constants.backendBaseUrl + constants.backendEventUrl + this.eventRegisterUrl;

    return new Promise((resolve) => {
      let queryParams = new HttpParams();
      queryParams = queryParams.append("eventID", eventID);
      queryParams = queryParams.append("userID", userID);

      this.http.post(urlToPost, null, {params: queryParams}).pipe(take(1)).subscribe(data => {
        resolve(data);
      });
    });
  }
}