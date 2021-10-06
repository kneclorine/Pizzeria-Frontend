import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cap-anchor',
  templateUrl: './cap-anchor.component.html',
  styleUrls: ['./cap-anchor.component.css']
})
export class CapAnchorComponent implements OnInit {
  @Input() text: string = '';
  @Input() link: string = '';
  constructor() { }

  ngOnInit() {
  }

}
