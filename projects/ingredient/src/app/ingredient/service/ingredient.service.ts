import { Injectable } from '@angular/core';
import { Authorize } from 'projects/core-lib/src/public-api';
import { Ingredient } from '../ingredient';

@Injectable({
  providedIn: 'root'
})

@Authorize()
export class IngredientService {

  add(ingredient: Ingredient) {

  }


  constructor() { }

}
