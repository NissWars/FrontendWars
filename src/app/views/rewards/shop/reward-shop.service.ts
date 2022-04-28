import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {HttpErrorHandler, HandleError} from '../../../http-error-handler.service';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RewardShopService {

  getAllRewardsUrl = 'http://localhost:8080/rewardShop/all';
  handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AccessRightService');
  }
  /*
  getAllRewards(eventID: any): Observable<any> {
    return this.http.get(`${this.getAllRewardsUrl}?eventID=${eventID}`)
      .pipe(catchError(this.handleError('getViewRewardsList', eventID)));
  }*/
  getAllRewards(): Observable<any> {
    return this.http.get(`${this.getAllRewardsUrl}`)
      .pipe(catchError(this.handleError('getViewRewardsList')));
  }
}
