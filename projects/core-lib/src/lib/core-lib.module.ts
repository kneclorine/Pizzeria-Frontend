import { NgModule } from '@angular/core';
import { CapButtonComponent } from './formcontrols/cap-button/cap-button.component';
import { CapCheckboxComponent } from './formcontrols/cap-checkbox/cap-checkbox.component';
import { CapImgComponent } from './formcontrols/cap-img/cap-img.component';
import { CapImguploadComponent } from './formcontrols/cap-imgupload/cap-imgupload.component';
import { CapInputComponent } from './formcontrols/cap-input/cap-input.component';
import { MenuComponent } from './menu/menu.component';
import IndexeddbService from './services/indexeddb.service';



@NgModule({
  declarations: [
    MenuComponent,
    CapInputComponent,
    CapButtonComponent,
    CapCheckboxComponent,
    CapImgComponent,
    CapImguploadComponent,
  ],
  imports: [
  ],
  exports: [
    MenuComponent,
    CapInputComponent,
    CapButtonComponent,
    CapCheckboxComponent,
    CapImgComponent,
    CapImguploadComponent,
  ]
})
export class CoreLibModule { 
  constructor(){ }
}
