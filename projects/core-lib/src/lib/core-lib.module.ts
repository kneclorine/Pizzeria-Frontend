import { NgModule } from '@angular/core';
import { CapButtonComponent } from './formcontrols/cap-button/cap-button.component';
import { CapInputComponent } from './formcontrols/cap-input/cap-input.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent,
    CapInputComponent,
    CapButtonComponent,
  ],
  imports: [
  ],
  exports: [
    MenuComponent,
    CapInputComponent,
    CapButtonComponent,
  ]
})
export class CoreLibModule { 
  constructor(){ }
}
