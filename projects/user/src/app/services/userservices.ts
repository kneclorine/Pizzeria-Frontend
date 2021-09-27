import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../userinterface';
import { environment } from '../../environments/environment'
import { UserLogin } from '../logininterface';
import { UserDTO } from 'projects/core-lib/src/lib/user/userDTO';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({providedIn: 'root'})
export class HttpUserService {

  constructor(public http: HttpClient) {
  }
  addUser(body: User):Observable<UserDTO> {
    return <Observable<UserDTO>> this.http.post(`${environment.url + "/api/v1/users"}`, body);
  }
  
}