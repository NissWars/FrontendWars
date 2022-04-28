import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import {PaymentDTO} from './wallet.component';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private REST_API_SERVER = "http://localhost:8080"

  private TOP_UP_URL = "http://localhost:8080/topUp/add"

  private PAYMENT_URL = "http://localhost:8080/topUp/add"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendGetPaginateRecords(id: String,curPage: String, col: String, asc: String){
    return this.httpClient.get("http://localhost:8080/topUp/paginatedlist/20220420000000000000/"+curPage+"/"+col+"/"+asc);
  }
  public sendGetBalance(id: String){
    return this.httpClient.get("http://localhost:8080/topUp/balance/20220420000000000000");
  }
  public sendGetCount(id: String){
    return this.httpClient.get("http://localhost:8080/topUp/count/20220420000000000000");
  }
  saveTopUp(detail: PaymentDTO) {
    console.log(detail);
    return this.httpClient.post<PaymentDTO>(this.TOP_UP_URL, detail).subscribe((val)=>{console.log(val)},response=>{console.log(response);});
  }

}
