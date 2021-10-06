import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../userinterface';

@Component({
  selector: 'user-formregister',
  templateUrl: './formregister.component.html',
  styleUrls: ['./formregister.component.css']
})
export class FormRegisterComponent {
  @Output() submit = new EventEmitter<User>()
  
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    policies: new FormControl(false, Validators.requiredTrue),
    consent: new FormControl(false, Validators.requiredTrue),
  });

  onSubmit($event:any){
    $event.stopPropagation();
    $event.preventDefault();
    if(this.formGroup.valid){
      this.submit.emit(this.formGroup.value)
    }
  } 
}
