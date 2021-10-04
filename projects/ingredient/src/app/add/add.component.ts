import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IngredientService } from '../service/ingredient.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

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
