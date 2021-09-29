import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CloudinaryModule} from '@cloudinary/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientSharedModule } from 'projects/ingredient/src/app/app.module';
import { UserSharedModule } from 'projects/user/src/app/app.module';
import { CoreLibModule } from 'core-lib';
import { CapImguploadComponent } from 'projects/core-lib/src/lib/formcontrols/cap-imgupload/cap-imgupload.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IngredientSharedModule.forRoot(),
    UserSharedModule.forRoot(),
    CoreLibModule,
    CloudinaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
