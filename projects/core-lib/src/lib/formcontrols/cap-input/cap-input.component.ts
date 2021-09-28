import { Component, OnInit, Input, Self, Optional, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
@Component({
  selector: 'cap-input',
  templateUrl: './cap-input.component.html',
  styleUrls: ['./cap-input.component.css']
})
export class CapInputComponent implements OnInit, ControlValueAccessor{

  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';

  value: any = '';

  constructor(
    @Self()

    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {}
  
  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }


  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange(event: any) {
    if (event){
      this.value = event;
    }
  }
  onTouched() {}
}
