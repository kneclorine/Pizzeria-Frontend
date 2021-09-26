import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { CoreLibComponent } from './core-lib.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';



@NgModule({
  declarations: [
    CoreLibComponent,
    MenuComponent,
    SpinnerComponent
  ],
  imports: [
    RouterModule,
    NgxPermissionsModule.forRoot()
  ],
  exports: [
    CoreLibComponent,
    MenuComponent,
    SpinnerComponent
  ]
})
export class CoreLibModule { }
 