import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IngredientdropdownComponent } from './ingredientdropdown/ingredientdropdown.component';
import { IngredientItemComponent } from './ingredientitem/ingredientitem.component';



@NgModule({
  declarations: [
    IngredientItemComponent,
    IngredientdropdownComponent
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    IngredientItemComponent,
    IngredientdropdownComponent
  ]
})
export class IngredientLibModule {
  constructor(){
  }
 }
