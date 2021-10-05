import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../../logininterface';

@Component({
  selector: 'user-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent  {
  @Output() submit = new EventEmitter<UserLogin>()

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  onSubmit($event:any){
    $event.stopPropagation();
    $event.preventDefault();
    if(this.formGroup.valid){
      this.submit.emit(this.formGroup.value)
    }
  }


  

}
