import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'pizza', loadChildren: () => import('../../projects/pizza/src/app/app.module').then(m=>m.PizzaSharedModule)},
  {path: 'user', loadChildren: () => import('../../projects/user/src/app/app.module').then(m=>m.UserSharedModule)},
  //TODO: Esto no funciona bien -> {path: '**', redirectTo: 'user/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
