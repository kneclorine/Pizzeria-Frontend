import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoreLibModule } from 'core-lib';
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
  ],
  providers: [
    IngredientService,
  ]
})
export class GetallModule { }