import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, Routes } from '@angular/router';
import { INTERCEPTORS } from 'core-lib'; 
import { DecoratorService } from 'core-lib';
import { AuthorizationObserver } from 'core-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const providers:any[] = [INTERCEPTORS, AuthorizationObserver]
const routes: Routes =[
  
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [providers],

  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private decoratorService: DecoratorService){}
}

@NgModule({})
export class UserSharedModule {
  constructor(private router: Router){}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
