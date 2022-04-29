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
export class feedBackService {


 
  saveFeedBackUrl = 'http://localhost:8080/feedback/add';

  handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AccessRightService');
  }


  saveFeedBack(detail: FormData ): Observable<HttpResponse<any>> {

    console.log(detail.get('comment'));
    console.log(detail.get('rating'));
    console.log(detail.get('image'));
    console.log(detail.get('eventID'));
    console.log(detail.get('eventSerialNumber'));

    return this.http.post<FormData>(`${this.saveFeedBackUrl}`, detail, { observe: 'response' });
  }



}