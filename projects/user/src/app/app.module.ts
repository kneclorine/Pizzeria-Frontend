import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { INTERCEPTORS } from 'core-lib'; 
import { DecoratorService } from 'core-lib';
import { AuthorizationObserver } from 'core-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpUserService } from './services/userservices';

/*const providers: any[] = [HttpUserService,{
  provide: HTTP_INTERCEPTORS,
  useClass: HttpInterceptorAuth,
  multi: true
}, AuthorizationObserver];*/
const providers:any[] = [INTERCEPTORS, AuthorizationObserver]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [providers],

  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private decoratorService: DecoratorService){}
}

@NgModule({})
export class UserSharedModule {
  constructor(){}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
