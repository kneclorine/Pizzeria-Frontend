import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreLibModule } from 'core-lib';
import { IngredientModule } from '../ingredient.module';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { IngredientItemComponent } from '../ingredientitem/ingredientitem.component';
import { IngredientService } from '../service/ingredient.service';
import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';

@NgModule({
  declarations: [
    AddComponent,
  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreLibModule,
    HttpClientModule,
    IngredientModule
  ],
  providers: [
    IngredientService,
  ]
})
export class AddModule { }