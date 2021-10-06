import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootRoutingModule } from './ingredient-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredientBaseComponent } from './ingredient.component';
import { CoreLibModule, INTERCEPTORS } from 'core-lib';
import { ChildRoutingModule } from './ingredient-routing.module';
import { FormComponent } from './getall/form/form.component';
import { CommonModule } from '@angular/common';
import { IngredientService } from './service/ingredient.service';
import { IngredientItemComponent } from './getall/ingredientitem/ingredientitem.component';
import { GetallComponent } from './getall/getall.component';

const providers: any[] = [INTERCEPTORS,];

@NgModule({
  declarations: [	
    IngredientBaseComponent,
    IngredientItemComponent,
    FormComponent,
    GetallComponent,
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