import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'user-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent  {
  @Input() formGroup: FormGroup|any
  @Output() submit = new EventEmitter<any>()
  @Output() btnClickEmt = new EventEmitter<any>()
  onSubmit($event:any){
    $event.stopPropagation();
    $event.preventDefault();
    this.submit.emit();
  }
  onRedirect(){
    this.btnClickEmt.emit();
  }

  

}
