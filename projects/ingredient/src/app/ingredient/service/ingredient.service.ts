import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authorize } from 'projects/core-lib/src/public-api';
import { Observable } from 'rxjs';
import { Ingredient } from '../ingredient';

@Injectable({
  providedIn: 'root'
})

@Authorize()
export class IngredientService {

  private url: string = 'http://localhost:9999/ingredients';

    constructor(private httpClient: HttpClient) { }

    create(ingredient: Ingredient): Observable<Ingredient> {
        return this.httpClient.post<Ingredient>(`${this.url}`, ingredient);
    }

}
