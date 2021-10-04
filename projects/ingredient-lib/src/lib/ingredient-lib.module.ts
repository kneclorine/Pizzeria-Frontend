import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthorizationObserver, DecoratorService, INTERCEPTORS } from 'core-lib';
import { IngredientdropdownComponent } from './ingredientdropdown/ingredientdropdown.component';
import { IngredientItemComponent } from './ingredientitem/ingredientitem.component';



@NgModule({
  declarations: [
    IngredientItemComponent,
    IngredientdropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    IngredientItemComponent,
    IngredientdropdownComponent
  ],
  providers:[
    INTERCEPTORS,
    AuthorizationObserver
  ]
})
export class IngredientLibModule {
  constructor(private decoratorService: DecoratorService){
  }
 }
