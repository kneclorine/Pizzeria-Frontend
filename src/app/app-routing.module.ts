import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'pizza', loadChildren: () => import('../../projects/pizza/src/app/pizza.module').then(m=>m.PizzaSharedModule)},
  {path: 'user', loadChildren: () => import('../../projects/user/src/app/user.module').then(m=>m.UserSharedModule)},
  {path: 'ingredient', loadChildren: () => import('../../projects/ingredient/src/app/ingredient.module').then(m=>m.IngredientSharedModule)},
  {path: '**', redirectTo: 'user/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

