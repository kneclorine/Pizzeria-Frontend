import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientLibModule } from 'ingredient-lib';

@NgModule({
  declarations: [
    IngredientComponent
    
  ],
  exports: [
    IngredientComponent
  ],
  imports: [
    CommonModule,
    IngredientLibModule
  ]
})
export class IngredientModule { 
  constructor() {
    
  }
}