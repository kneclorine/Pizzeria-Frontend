import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootRoutingModule } from './ingredient-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredientComponent } from './ingredient.component';
import { CoreLibModule, INTERCEPTORS } from 'core-lib';
import { ChildRoutingModule } from './ingredient-routing.module';
import { FormComponent } from './ingredientglobal/form/form.component';
import { GetallComponent } from './ingredientglobal/getall/getall.component';
import { CommonModule } from '@angular/common';
import { IngredientglobalComponent} from './ingredientglobal/ingredientglobal.component' ;
import { IngredientService } from 'ingredient-lib';
import { IngredientLibModule } from 'ingredient-lib';

const providers: any[] = [INTERCEPTORS,];

@NgModule({
  declarations: [	
    IngredientComponent,
    FormComponent,
    GetallComponent,
    IngredientglobalComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    RootRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreLibModule,
    IngredientLibModule,
    
  ],
  providers: providers,
  bootstrap: [IngredientComponent]
})
export class IngredientModule { 
  constructor(){}
}

@NgModule({
  imports: [
    ChildRoutingModule,
    ReactiveFormsModule,
    CoreLibModule,
    HttpClientModule,
  ],
  providers: [IngredientService]


})
export class IngredientSharedModule {
  static forRoot(): ModuleWithProviders<IngredientModule> {
    return {
      ngModule: IngredientModule,
      providers: providers
    }
  }
}