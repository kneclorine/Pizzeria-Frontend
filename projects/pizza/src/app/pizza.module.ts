import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreLibModule } from 'core-lib';
import { AddComponent } from './add/add.component';
import { ChildRoutingModule, RootRoutingModule } from './pizza-routing.module';
import { PizzaComponent } from './pizza.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IngredientLibModule } from 'ingredient-lib';
import { CommonModule } from '@angular/common';

const providers: any[] = []

@NgModule({
  declarations: [	
    PizzaComponent,
    AddComponent,
   ],
  imports: [
    CommonModule,
    BrowserModule,
    RootRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreLibModule,
    IngredientLibModule,
  ],
  providers: providers,
  bootstrap: [PizzaComponent]
})
export class PizzaModule {
  constructor(){}
}

@NgModule({
  imports:[
    FormsModule,
    ChildRoutingModule,
  ]
})
export class PizzaSharedModule {
  static forRoot(): ModuleWithProviders<PizzaModule> {
    return {
      ngModule: PizzaModule,
      providers: providers,
    }
  }
}
