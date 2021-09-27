import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientComponent } from './ingredient/ingredient.component';

const routes: Routes = [{
  path: 'ingredients', component: IngredientComponent ,
  loadChildren: () => import('./ingredient/ingredient.module').then(m => m.IngredientModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
