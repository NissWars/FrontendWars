import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import * as constants from '../../../classes/constants';
import {HttpErrorHandler, HandleError} from '../../../http-error-handler.service';
import {catchError} from 'rxjs/operators';


export interface RewardDto{
  custId?: any;
  itemId?: any;
  points?: any;
}
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

  getAllRewardsUrl = constants.backendRewardShopMicroServiceUrl + '/rewardShop/all';
  handleError: HandleError;
  httpClient: any;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AccessRightService');
  }

  public getAllRewards(): any {
      return this.http.get(this.getAllRewardsUrl);
  }

  public getCustomer(Id: String): any {
    return this.http.get(constants.backendRewardShopMicroServiceUrl + "/customers/find/" + Id);
}

  public rewardUpdate(rewardDto: RewardDto) {
    return this.http.post<String>(constants.backendRewardShopMicroServiceUrl + '/rewardShop/claim/', rewardDto);
  }
  
}
