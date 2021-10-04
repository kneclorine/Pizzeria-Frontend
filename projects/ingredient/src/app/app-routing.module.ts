import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientBaseComponent } from './app.component';

const routesRoot: Routes = [
  {
    path: '', component: IngredientBaseComponent,
  },
  {
    path: 'ingredient/add',
    loadChildren: () => import('./add/add.module')
    .then(module => module.AddModule)
  },
  {
    path: 'ingredient/getall',
    loadChildren: () => import('./getall/getall.module')
    .then(module => module.GetallModule)
  },
];

const routesChild: Routes = [{
  path: 'add',
  loadChildren: () => import('./add/add.module')
    .then(module => module.AddModule),
},
{
  path: 'getall',
  loadChildren: () => import('./getall/getall.module')
  .then(module => module.GetallModule)
},]

@NgModule({
  imports: [RouterModule.forRoot(routesRoot)],
  exports: [RouterModule]
})
export class RootRoutingModule { }

@NgModule({
  imports: [RouterModule.forChild(routesChild)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }