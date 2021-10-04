import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authorize } from 'core-lib';
import { Observable } from 'rxjs';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root'
})
export class GetallService {

  constructor(public http: HttpClient) { }

  @Authorize()
  getAll(): Observable<Ingredient []>{
    return <Observable<Ingredient []>> this.http.get(`http://localhost:9999/api/v1/ingredients`)
  }
}
