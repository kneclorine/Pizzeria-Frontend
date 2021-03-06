import { NgModule } from '@angular/core';
import { CapButtonComponent } from './formcontrols/cap-button/cap-button.component';
import { CapCheckboxComponent } from './formcontrols/cap-checkbox/cap-checkbox.component';
import { CapImgComponent } from './formcontrols/cap-img/cap-img.component';
import { CapImguploadComponent } from './formcontrols/cap-imgupload/cap-imgupload.component';
import { CapInputComponent } from './formcontrols/cap-input/cap-input.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CapErrorComponent } from './formcontrols/cap-error/cap-error.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DecoratorService } from './interceptor/decoratorservice';
import { CapAnchorComponent } from './formcontrols/cap-anchor/cap-anchor.component';
import { INTERCEPTORS } from './interceptor';
import { AuthorizationObserver } from './services/authorizationobserver';



@NgModule({
  declarations: [
    MenuComponent,
    CapInputComponent,
    CapButtonComponent,
    CapCheckboxComponent,
    CapImgComponent,
    CapErrorComponent,
    CapImguploadComponent,
    SpinnerComponent,
    CapAnchorComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    MenuComponent,
    CapInputComponent,
    CapButtonComponent,
    CapCheckboxComponent,
    CapImgComponent,
    CapImguploadComponent,
    CapAnchorComponent,
  ],
  providers:[
    INTERCEPTORS,
    AuthorizationObserver
  ]
  
})
export class CoreLibModule { 
  constructor(private decoratorService: DecoratorService){ }
}
