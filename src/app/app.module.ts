import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CloudinaryModule} from '@cloudinary/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreLibModule, INTERCEPTORS } from 'core-lib';
import { InjectorDecorator } from 'core-lib';

const providers:any[] = [INTERCEPTORS]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreLibModule,
    CloudinaryModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [providers],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injectorDecorator: InjectorDecorator) { 
  }
}
