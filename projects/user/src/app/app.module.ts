import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { INTERCEPTORS } from 'core-lib'; 
import { DecoratorService } from 'core-lib';
import { AuthorizationObserver } from 'core-lib';
import { UserComponent } from './app.component';
import { CoreLibModule } from 'core-lib';
import { ChildRoutingModule, RootRoutingModule } from './app-routing.module';
import { UserService } from './services/userservices';
import { HttpClientModule } from '@angular/common/http';

const providers:any[] = [INTERCEPTORS, AuthorizationObserver, UserService]

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreLibModule,
    RootRoutingModule,
    HttpClientModule,
  ],
  providers: [providers],

  bootstrap: [UserComponent]
})
export class UserModule { 
  constructor(private decoratorService: DecoratorService){}
}

@NgModule({
  imports: [
    ChildRoutingModule,
  ],
})
export class UserSharedModule {
  static forRoot(): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: providers
    }
  }
}
