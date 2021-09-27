import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorService } from 'core-lib';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class IngredientModule { 
  constructor(decoratorService: DecoratorService) {
    
  }
}