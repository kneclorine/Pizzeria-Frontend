import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpUserService {
  url: string;
  constructor(public http: HttpClient) {
    this.url = "http://localhost:8080"
  }

  post(apiRoute: string, body: any) {
    return this.http.post(`${this.url + "/user"}`, body, { headers: this.getHttpHeaders() });
  }
  getHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set("key", "value");
  }
}