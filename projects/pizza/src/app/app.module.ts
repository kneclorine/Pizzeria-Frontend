import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreLibModule } from 'core-lib';
import { AddComponent } from './add/add.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

const providers: any[] = []

@NgModule({
  declarations: [	
    AppComponent,
    AddComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreLibModule,
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
}

@NgModule({})
export class PizzaSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers,
    }
  }
}
