import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CloudinaryModule} from '@cloudinary/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreLibModule } from 'core-lib';
import { InjectorDecorator } from 'core-lib';
import { UserSharedModule } from 'projects/user/src/app/app.module';
import { PizzaSharedModule } from 'projects/pizza/src/app/app.module';
import { IngredientSharedModule } from 'projects/ingredient/src/app/app.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreLibModule,
    CloudinaryModule,
    BrowserModule,
    AppRoutingModule,
    UserSharedModule.forRoot(),
    PizzaSharedModule.forRoot(),
    IngredientSharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injectorDecorator: InjectorDecorator) {
    
  }
}
