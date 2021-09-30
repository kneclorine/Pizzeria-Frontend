import { Component, Input,} from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'cap-checkbox',
  templateUrl: './cap-checkbox.component.html',
  styleUrls: ['./cap-checkbox.component.css']
})
export class CapCheckboxComponent {
  @Input() text: string ='';
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
