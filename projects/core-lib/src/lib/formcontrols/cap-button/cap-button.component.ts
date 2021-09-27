import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cap-button',
  templateUrl: './cap-button.component.html',
  styleUrls: ['./cap-button.component.css']
})
export class CapButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() buttonConfig: any;
  @Input() text: string = '';
  @Output() textBtnClickEmt: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onTextBtnClick() {
    this.textBtnClickEmt.emit();
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}