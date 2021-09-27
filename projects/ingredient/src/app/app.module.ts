import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationObserver } from 'core-lib';
import { DecoratorService } from 'core-lib';
import { INTERCEPTORS } from 'projects/core-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';

const providers: any = [INTERCEPTORS, AuthorizationObserver]

const routes: Routes = [
  { path: 'ingredients', component: IngredientComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [providers],
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
      ngModule: AppModule, providers : providers
    }
  }
}