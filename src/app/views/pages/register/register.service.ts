import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs'
import {RegisterDTO} from './register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private REST_API_SERVER = "http://localhost:8080"
  private ADD_URL = "http://localhost:8080/customers/add"

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public sendGetAllCustomers(){
    return this.httpClient.get("http://localhost:8080/customers/all");
  }

  public sendGet1Customer(Id: String){
    return this.httpClient.get("http://localhost:8080/customers/find/" + Id);
  }

  saveSubmit(detail: RegisterDTO) {
    console.log(detail);
    return this.httpClient.post<RegisterDTO>(this.ADD_URL, detail).subscribe((val)=>{console.log(val)},response=>{console.log(response);});
  }


}

