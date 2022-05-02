import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import {HistoryDTO} from './wallet.component';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private REST_API_SERVER = "http://localhost:8080"

  private TOP_UP_URL = "http://localhost:8080/topUp/add"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendGetPaginateRecords(id: String){
    return this.httpClient.get(this.REST_API_SERVER+"/topUp/find/" + id);
  }
  public sendGetBalance(id: String){
    return this.httpClient.get(this.REST_API_SERVER+"/customers/find/"+id);
  }
  public saveTopUp(detail: HistoryDTO) {
    return this.httpClient.post<HistoryDTO>(this.TOP_UP_URL, detail);
  }

}
