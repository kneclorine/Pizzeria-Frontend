import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthorizationObserver } from 'core-lib';
import { DecoratorService } from 'projects/core-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientModule } from './ingredient/ingredient.module';
import { IngredientService } from './ingredient/service/ingredient.service';

const providers: any = [, AuthorizationObserver]

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IngredientModule
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private decoratorService: DecoratorService) {

  }
 }

@NgModule({})
export class IngredientSharedModule{
  static forRoot(): ModuleWithProviders{
    return{
      ngModule: AppModule, providers : [IngredientService]
    }
  }
}