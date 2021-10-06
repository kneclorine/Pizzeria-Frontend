import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientBaseComponent } from './ingredient.component';

const routes: Routes = [  
  {
    path: '',
    component: IngredientBaseComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }

