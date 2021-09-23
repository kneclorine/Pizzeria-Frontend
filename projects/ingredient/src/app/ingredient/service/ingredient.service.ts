import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authorize } from 'projects/core-lib/src/public-api';
import { environment } from '../../../../../../src/environments/environment';
import { Observable } from 'rxjs';
import { Ingredient } from '../ingredient';

@Injectable({
  providedIn: 'root'
})

@Authorize()
export class IngredientService {

  private url: string = environment.url;

    constructor(public http: HttpClient) { }

    getAll(): Observable<Ingredient []>{
      return <Observable<Ingredient[]>> this.http.get(`${this.url}/ingredients`);
   }

}
