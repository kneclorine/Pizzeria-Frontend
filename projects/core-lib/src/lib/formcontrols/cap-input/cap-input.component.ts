import { Component,Input,  } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'cap-input',
  templateUrl: './cap-input.component.html',
  styleUrls: ['./cap-input.component.css']
})
export class CapInputComponent{

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() formGroup:FormGroup|any;
  @Input() name:string|any

  private get control(): FormControl | any{
    return this.formGroup && this.formGroup.get(this.name)
  }
  get errors(): ValidationErrors | null{
    return  this.control?.errors
  }
  get dirty(): boolean{
    return this.control?.dirty
  }
 
}