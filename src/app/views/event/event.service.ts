import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private http: HttpClient) { 

  }

  public getEventDetail(eventID: string): any {
    let urlToGet = constants.backendBaseUrl + constants.backendEventUrl + this.eventDetailUrl + eventID; 
    let eventDetail: Event;

    return new Promise((resolve) => {
      this.http.get(urlToGet).pipe(
        take(1)
      ).subscribe(data => {
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
        
        resolve(eventDetail);
      });
    });
  }
}
