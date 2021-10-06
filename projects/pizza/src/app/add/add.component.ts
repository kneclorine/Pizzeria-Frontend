import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from '../pizzainterface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{

  @Output() submit = new EventEmitter<Pizza>();

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required)
  });

  onSubmit(event: Event){
    event.stopPropagation();
    event.preventDefault();
    if(this.formGroup.valid){
      this.submit.emit(this.formGroup.value);
    }
  }
}
