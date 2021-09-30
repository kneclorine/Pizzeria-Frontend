import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CloudinaryModule} from '@cloudinary/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreLibModule } from 'core-lib';
import { SpinnerComponent } from 'core-lib';
import { InjectorDecorator } from 'core-lib';
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
    CoreLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injectorDecorator: InjectorDecorator) {
    
  }
}
