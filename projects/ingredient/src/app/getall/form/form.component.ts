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
  @Input() ingredient: Ingredient | null = null;
  @Output() add = new EventEmitter<IngredientCreateDTO>();
  @Output() update = new EventEmitter<IngredientUpdateDTO>();

  private add2: Actions = Actions.add
  
  constructor(
    ) { }

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });

  ngOnChanges(changes: SimpleChanges): void{
    if ( changes){
      
    }
  }
  onSubmit(){
    
  }
}
