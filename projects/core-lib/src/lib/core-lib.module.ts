import { NgModule } from '@angular/core';
import { CoreLibComponent } from './core-lib.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    CoreLibComponent,
    MenuComponent
  ],
  imports: [
  ],
  exports: [
    CoreLibComponent
  ]
})
export class CoreLibModule { }
