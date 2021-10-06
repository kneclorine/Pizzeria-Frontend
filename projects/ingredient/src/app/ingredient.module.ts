import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootRoutingModule } from './ingredient-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredientBaseComponent } from './ingredient.component';
import { CoreLibModule, INTERCEPTORS } from 'core-lib';
import { ChildRoutingModule } from './ingredient-routing.module';
import { IngredientItemComponent } from './ingredientglobal/ingredientitem/ingredientitem.component';
import { FormComponent } from './ingredientglobal/form/form.component';
import { GetallComponent } from './ingredientglobal/getall/getall.component';
import { CommonModule } from '@angular/common';
import { IngredientglobalComponent} from './ingredientglobal/ingredientglobal.component' ;
import { IngredientService } from './service/ingredient.service';

const providers: any[] = [INTERCEPTORS,];

@NgModule({
  declarations: [	
    IngredientBaseComponent,
    IngredientItemComponent,
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
    
  ],
  providers: providers,
  bootstrap: [IngredientBaseComponent]
})
export class IngredientBaseModule { 
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
  static forRoot(): ModuleWithProviders<IngredientBaseModule> {
    return {
      ngModule: IngredientBaseModule,
      providers: providers
    }
  }
}