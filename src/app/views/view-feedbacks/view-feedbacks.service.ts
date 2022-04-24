import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpErrorHandler, HandleError} from '../../http-error-handler.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class viewFeedBacksService {
    getFeedbacksUrl = 'http://localhost:8080/feedback/findevent';
 

  handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AccessRightService');
  }


  getFeedBacks(eventID: any): Observable<any> {
    return this.http.get(`${this.getFeedbacksUrl}?eventID=${eventID}`)
      .pipe(catchError(this.handleError('getViewPendingAcceptanceDetailList', eventID)));
  }



}