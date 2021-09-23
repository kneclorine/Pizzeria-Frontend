import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../userinterface';
import { environment } from '../../environments/environment'

@Injectable({providedIn: 'root'})
export class HttpUserService {

  constructor(public http: HttpClient) {
  }
  addUser(body: User) {
    return this.http.post(`${environment.url + "/api/v1/users"}`, body);
  }
}