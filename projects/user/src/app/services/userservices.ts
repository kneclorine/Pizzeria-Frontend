import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../userinterface';
import { environment } from '../../environments/environment'
import { UserLogin } from '../logininterface';
import { Authorize, spinner, UserDTO } from 'core-lib';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class HttpUserService {

  constructor(public http: HttpClient) {
  }
  addUser(body: User):Observable<UserDTO> {
    return <Observable<UserDTO>> this.http.post(`${environment.url + "/api/v1/users"}`, body);
  }
  @Authorize()
  login(body:UserLogin):Observable<UserDTO>{
    return <Observable<UserDTO>> this.http.post(`${environment.url + "/api/v1/users/login"}`, body)
  }
  
}


