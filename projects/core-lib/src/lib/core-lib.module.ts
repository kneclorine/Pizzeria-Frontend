import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { CoreLibComponent } from './core-lib.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    CoreLibComponent,
    MenuComponent,
    SpinnerComponent
  ],
  imports: [
  ],
  exports: [
    CoreLibComponent,
    MenuComponent,
    SpinnerComponent
  ]
})
export class CoreLibModule { }
