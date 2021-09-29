import { NgModule } from '@angular/core';
import { CapButtonComponent } from './formcontrols/cap-button/cap-button.component';
import { CapCheckboxComponent } from './formcontrols/cap-checkbox/cap-checkbox.component';
import { CapImgComponent } from './formcontrols/cap-img/cap-img.component';
import { CapInputComponent } from './formcontrols/cap-input/cap-input.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent,
    CapInputComponent,
    CapButtonComponent,
    CapCheckboxComponent,
    CapImgComponent,
  ],
  imports: [
  ],
  exports: [
    MenuComponent,
    CapInputComponent,
    CapButtonComponent,
    CapCheckboxComponent,
    CapImgComponent,
  ]
})
export class CoreLibModule { 
  constructor(){ }
}
