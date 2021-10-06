import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredientBaseComponent } from './app.component';
import { CoreLibModule, INTERCEPTORS } from 'core-lib';
import { ChildRoutingModule } from './app-routing.module';

const providers: any[] = [INTERCEPTORS];

@NgModule({
  declarations: [	
    IngredientBaseComponent,
   ],
  imports: [
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
  ]
})
export class IngredientSharedModule {
  static forRoot(): ModuleWithProviders<IngredientBaseModule> {
    return {
      ngModule: IngredientBaseModule,
      providers: providers
    }
  }
}