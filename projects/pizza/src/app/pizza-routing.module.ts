import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path:'add', component: AddComponent },
];

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
