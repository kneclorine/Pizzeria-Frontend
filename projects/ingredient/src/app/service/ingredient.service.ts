import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient, IngredientCreateDTO } from './ingredient';
import { Authorize } from 'core-lib';

@Injectable({
  providedIn: 'root'
})


export class IngredientService {


  constructor(public http: HttpClient) { }

  @Authorize()
  getAll(): Observable<Ingredient []>{
    return <Observable<Ingredient []>> this.http.get(`http://localhost:9999/api/v1/ingredients`)
  }

  @Authorize()
  createIngredient(ingredient: IngredientCreateDTO): Observable<Object>{
    return this.http.post(`http://localhost:9999/api/v1/ingredients`, ingredient);
  }

  deleteIngredient(id: string) {
    this.http.delete(`http://localhost:9999/api/v1/ingredients/${id}`).subscribe()
  }

  getIngredientById(id: string): Observable<Ingredient>{
    return this.http.get<Ingredient>(`http://localhost:9999/api/v1/ingredients/${id}`);
  }
}