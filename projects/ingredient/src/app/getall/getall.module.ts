import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoreLibModule, DecoratorService, AuthorizationObserver } from 'core-lib';
import { IngredientModule } from '../ingredient.module';
import { IngredientService } from '../service/ingredient.service';
import { GetAllRoutingModule } from './getall-routing.module';
import { GetallComponent } from './getall.component';

@NgModule({
  declarations: [
    GetallComponent,
  ],
  imports: [
    CommonModule,
    GetAllRoutingModule,
    CoreLibModule,
    HttpClientModule,
    IngredientModule,
    CoreLibModule
  ],
  providers: [
    IngredientService, AuthorizationObserver
  ]
})
export class GetallModule { 
  constructor(decoratorService: DecoratorService) {
    
  }
}