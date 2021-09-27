import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  {
    path: 'ingredients',
    loadChildren: () => import('./ingredient/ingredient.module').then(m => m.IngredientModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ADMIN']
      }//TODO Terminar permisos y menú.
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
