import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'user-formregister',
  templateUrl: './formregister.component.html',
  styleUrls: ['./formregister.component.css']
})
export class FormRegisterComponent {
  @Input() formGroup: FormGroup|any
  @Output() submit = new EventEmitter<any>()   
  onSubmit($event:any){
    $event.stopPropagation();
    $event.preventDefault();
    this.submit.emit()
  }

  
}
