import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CloudinaryModule} from '@cloudinary/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreLibModule } from 'core-lib';
import { InjectorDecorator } from 'core-lib';
import { IngredientLibModule } from 'ingredient-lib';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreLibModule,
    IngredientLibModule,
    CloudinaryModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injectorDecorator: InjectorDecorator) {
    
  }
}
