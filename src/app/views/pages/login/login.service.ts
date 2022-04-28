import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs'
import {LoginDTO} from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private REST_API_SERVER = "http://localhost:8080"

  private LOGIN_URL = "http://localhost:8080/customers/verify"

  constructor(private httpClient: HttpClient) { }

  public sendGetCredential(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendGetAllCustomers(){
    return this.httpClient.get("http://localhost:8080/customers/all");
  }

  public sendGet1Customer(id: String){
    return this.httpClient.get("http://localhost:8080/customers/find/" + id);
  }
  
  saveLogin(detail: LoginDTO) {
    console.log(detail);
    return this.httpClient.post<LoginDTO>(this.LOGIN_URL, detail);
  }

}
