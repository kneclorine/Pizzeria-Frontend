import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientItemComponent } from './ingredientitem/ingredientitem.component';
@NgModule({
  declarations: [
    IngredientItemComponent,
    
  ],
  exports: [
    IngredientItemComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class IngredientModule { 
  constructor() {
    
  }
}