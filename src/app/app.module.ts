import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientSharedModule } from 'projects/ingredient/src/app/app.module';
import { UserSharedModule } from 'projects/user/src/app/app.module';
import { CoreLibModule } from 'core-lib';
import { InjectorDecorator } from 'projects/core-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IngredientSharedModule.forRoot(),
    UserSharedModule.forRoot(),
    CoreLibModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injectorDecorator: InjectorDecorator) {

  }
}
