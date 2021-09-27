import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cap-checkbox',
  templateUrl: './cap-checkbox.component.html',
  styleUrls: ['./cap-checkbox.component.css']
})
export class CapCheckboxComponent {
  @Input() text: string ='';
  @Input() disabled = false;

  isChecked = false;

  writeValue(obj: boolean): void {
    this.isChecked = obj;
  }

}
