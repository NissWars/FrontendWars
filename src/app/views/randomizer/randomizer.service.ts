import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs'

interface ItemResponseObj{
  eventId:String,
  eventSerialNumber:String,
  location:String,
  startTime:Date,
  pointCompletion: String,
  price: String,
  maximumPax: String,
  organizerId:String,
  orgName:String,
  tagId:string,
  tagName:String,
  eventTagId:String
}

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {

  private REST_API_SERVER = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendGetAllTags(Id: String){
    return this.httpClient.get("http://localhost:8080/event/list/allTagId/20220420000000000001");
  }
}
