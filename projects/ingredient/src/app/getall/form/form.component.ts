import { Component, EventEmitter, OnChanges, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actions } from '../../service/actions';
import { Ingredient, IngredientCreateDTO, IngredientUpdateDTO } from '../../service/ingredient';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  @Input() ingredient: Ingredient | undefined = undefined;
  @Output() add: EventEmitter<IngredientCreateDTO> = new EventEmitter<IngredientCreateDTO>();
  @Output() update: EventEmitter<IngredientUpdateDTO> = new EventEmitter<IngredientUpdateDTO>();

  private action: Actions = Actions.add

  addForm = new FormGroup({
    id : new FormControl(''),
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required)
  });


  ngOnChanges(changes: SimpleChanges): void {
    this.action = Actions.add;
    if (changes && changes.ingredient && changes.ingredient.currentValue) {
      this.action = Actions.update;
    }
    this.initializeForm()
  }
  private initializeForm() {
    if (this.ingredient) {
      this.addForm.setValue(this.ingredient);
      return ;
    }
    this.addForm.reset()
  }
  onSubmit() {
    if (this.addForm.valid) {
      this.action === Actions.add ?
        this.add.emit(this.addForm.value) :
        this.update.emit(this.addForm.value)
    }
  }
}
