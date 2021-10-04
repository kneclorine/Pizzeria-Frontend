import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
].map(r=>({...r, data: { loadLayout: true }}))

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }

@NgModule({
  imports: [
    RouterModule.forRoot([
      ...routes.map(r => {
        return { ...r, data: { loadLayout: false } }
      })
      , { path: '', pathMatch: 'full', redirectTo: 'login' }])],
  exports: [RouterModule]
})
export class RootRoutingModule { }
