import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule} from '../../projects/pizza/src/app/app.module';

const routes: Routes = [
  {path: 'pizza', loadChildren: () => import('../../projects/pizza/src/app/app.module').then(m=>m.PizzaSharedModule)},
  {path: 'user', loadChildren: () => import('../../projects/user/src/app/app.module').then(m=>m.UserSharedModule)},
  {path: 'ingredient', loadChildren: () => import('../../projects/ingredient/src/app/app.module').then(m=>m.IngredientSharedModule)},
  {path: '**', redirectTo: 'user/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    AppModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
