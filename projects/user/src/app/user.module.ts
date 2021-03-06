import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { CoreLibModule } from 'core-lib';
import { ChildRoutingModule, RootRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './register/formregister/formregister.component';
import { FormloginComponent } from './login/formlogin/formlogin.component';
import { UserService } from './services/userservices';

const providers:any[] = []

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    UserLayoutComponent,
    FormRegisterComponent,
    FormloginComponent,
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
  constructor(){
  }
}

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ChildRoutingModule,
  ],
  providers: [UserService]
})
export class UserSharedModule {
  constructor(){
  }
  static forRoot(): ModuleWithProviders<UserModule> {
    
    return {
      ngModule: UserModule,
      providers: providers
    }
  }
}
