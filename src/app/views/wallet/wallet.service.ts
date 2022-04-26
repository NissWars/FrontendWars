import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private REST_API_SERVER = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendGetPaginateRecords(id: String,curPage: String, col: String, asc: String){
    return this.httpClient.get("http://localhost:8080/topUp/paginatedlist/20220420000000000000/"+curPage+"/"+col+"/1");
  }
  public sendGetBalance(id: String){
    return this.httpClient.get("http://localhost:8080/topUp/balance/20220420000000000000");
  }
  public sendGetCount(id: String){
    return this.httpClient.get("http://localhost:8080/topUp/count/20220420000000000000");
  }
}
