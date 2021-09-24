import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientComponent } from './ingredient.component';

const routes: Routes = [{
  path: 'ingredients', component: IngredientComponent 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientRoutingModule { }
