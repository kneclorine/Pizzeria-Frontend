import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'user-formregistercomponent',
  templateUrl: './formregistercomponent.component.html',
  styleUrls: ['./formregistercomponent.component.css']
})
export class FormregistercomponentComponent {
  @Input() formGroup: FormGroup|any
  @Output() submit = new EventEmitter<any>()   
  onSubmit($event:any){
    $event.stopPropagation();
    $event.preventDefault();
    this.submit.emit()
  }

  
}
