import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IngredientCreateDTO, IngredientUpdateDTO } from '../../service/ingredient';
import { IngredientService } from '../../service/ingredient.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() add = new EventEmitter<IngredientCreateDTO>();
  @Output() update = new EventEmitter<IngredientUpdateDTO>();
  constructor(private ingredientservice: IngredientService) { }

  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  });
  ngOnInit() {
  }

  onSubmit(){
    const observer = this.ingredientservice.createIngredient(this.addForm.value)
    const unsuscribe = observer.subscribe((data)=>{
      console.log(data);

    });
  }
}
