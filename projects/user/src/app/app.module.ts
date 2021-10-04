import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { INTERCEPTORS } from 'core-lib'; 
import { DecoratorService } from 'core-lib';
import { UserComponent } from './app.component';
import { CoreLibModule } from 'core-lib';
import { ChildRoutingModule, RootRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/userservices';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { CommonModule } from '@angular/common';
import { FormregistercomponentComponent } from './register/formregistercomponent/formregistercomponent.component';

const providers:any[] = [INTERCEPTORS]

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    UserLayoutComponent,
    FormregistercomponentComponent,
  ],
  imports: [
    CommonModule,
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
  constructor(private decoratorService: DecoratorService){
  }
}

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CoreLibModule,
    ChildRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService]
})
export class UserSharedModule {
  constructor(private decoratorService: DecoratorService){
  }
  static forRoot(): ModuleWithProviders<UserModule> {
    
    return {
      ngModule: UserModule,
      providers: providers
    }
  }
}
