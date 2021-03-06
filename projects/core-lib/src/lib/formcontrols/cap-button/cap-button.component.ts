import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cap-button',
  templateUrl: './cap-button.component.html',
  styleUrls: ['./cap-button.component.css']
})
export class CapButtonComponent implements OnInit {
  @Input() buttonConfig: any;
  @Input() text: string = '';
  @Output() btnClickEmt: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onBtnClick() {
    this.btnClickEmt.emit();
  }

}