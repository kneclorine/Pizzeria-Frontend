import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientService } from './ingredient/service/ingredient.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class IngredientSharedModule{
  static forRoot(): ModuleWithProviders{
    return{
      ngModule: AppModule, providers : []
    }
  }
}