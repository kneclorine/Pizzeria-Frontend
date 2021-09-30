import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CloudinaryModule} from '@cloudinary/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientSharedModule } from 'projects/ingredient/src/app/app.module';
import { UserSharedModule } from 'projects/user/src/app/app.module';
import { CoreLibModule } from 'core-lib';
import { SpinnerComponent } from 'projects/core-lib/src/public-api';
import { InjectorDecorator } from 'projects/core-lib/src/lib/decorators/injectorDecorator';
import { PizzaSharedModule } from 'projects/pizza/src/app/app.module';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    CoreLibModule,
    CloudinaryModule,
    BrowserModule,
    AppRoutingModule,
    IngredientSharedModule.forRoot(),
    UserSharedModule.forRoot(),
    PizzaSharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injectorDecorator: InjectorDecorator) {
    
  }
}
