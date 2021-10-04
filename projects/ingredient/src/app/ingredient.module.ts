import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientItemComponent } from './ingredientitem/ingredientitem.component';
import { IngredientComponent } from './ingredient/ingredient.component';

@NgModule({
  declarations: [
    IngredientItemComponent,
    IngredientComponent
    
  ],
  exports: [
    IngredientItemComponent,
    IngredientComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class IngredientModule { 
  constructor() {
    
  }
}