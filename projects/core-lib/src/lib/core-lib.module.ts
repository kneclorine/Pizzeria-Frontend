import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { CapButtonComponent } from './formcontrols/cap-button/cap-button.component';
import { CapCheckboxComponent } from './formcontrols/cap-checkbox/cap-checkbox.component';
import { CapImgComponent } from './formcontrols/cap-img/cap-img.component';
import { CapInputComponent } from './formcontrols/cap-input/cap-input.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';



@NgModule({
  declarations: [
    MenuComponent,
    CapInputComponent,
    CapButtonComponent,
    CapCheckboxComponent,
    CapImgComponent,
  ],
  imports: [
    RouterModule,
    NgxPermissionsModule.forRoot()
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
