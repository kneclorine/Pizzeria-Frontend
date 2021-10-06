import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreLibModule } from 'core-lib';
import { AddComponent } from './add/add.component';
import { PizzaRoutingModule } from './pizza-routing.module';
import { PizzaComponent } from './pizza.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IngredientLibModule } from 'ingredient-lib';

const providers: any[] = []

@NgModule({
  declarations: [	
    PizzaComponent,
    AddComponent,
   ],
  imports: [
    BrowserModule,
    PizzaRoutingModule,
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

@NgModule({})
export class PizzaSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PizzaModule,
      providers: providers,
    }
  }
}
