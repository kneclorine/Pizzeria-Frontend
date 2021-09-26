import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { DecoratorService } from 'core-lib';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IngredientRoutingModule
  ]
})
export class IngredientModule { 
  constructor(decoratorService: DecoratorService) {
    
  }
}
