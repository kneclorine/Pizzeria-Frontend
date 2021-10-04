import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './app.component';

const routesRoot: Routes = [
  {
    path:'', pathMatch: 'full', redirectTo:'user/login'
  },
  {
    path:'user', pathMatch: 'full', redirectTo:'user/login'
  },
  {
    path: 'user/register',
    loadChildren: () => import('./register/register.module')
      .then(module => module.RegisterModule)
  },
  {
    path: 'user/login',
    loadChildren: () => import('./login/login.module')
      .then(module => module.LoginModule)
  }
];

const routesChild: Routes = [
  {
    path: '', component: UserComponent,
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module')
      .then(module => module.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module')
      .then(module => module.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesChild)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }

@NgModule({
  imports: [RouterModule.forRoot(routesRoot)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
