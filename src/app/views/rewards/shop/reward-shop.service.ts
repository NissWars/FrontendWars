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

  public getAllRewards(): any {
    return new Promise((resolve) =>{
      this.http.get(this.getAllRewardsUrl).pipe().subscribe(data => {

        resolve(data);
      
      });
    });
  }
  
}
