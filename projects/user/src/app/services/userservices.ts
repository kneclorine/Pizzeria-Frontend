import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../userinterface';
import { environment } from '../../environments/environment'
import { UserLogin } from '../logininterface';

@Injectable({providedIn: 'root'})
export class HttpUserService {

  constructor(public http: HttpClient) {
  }
  addUser(body: User) {
    return this.http.post(`${environment.url + "/api/v1/users"}`, body);
  }
  login(bodyLog: UserLogin){
    return this.http.get(`${environment.url + "/api/v1/users?email="+ bodyLog.email}`);
  }
}