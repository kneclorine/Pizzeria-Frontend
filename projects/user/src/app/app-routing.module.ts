import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { UserComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path:'user/login', component: LoginComponent},
  { path:'user/register', component: RegisterComponent},
  { path:'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
