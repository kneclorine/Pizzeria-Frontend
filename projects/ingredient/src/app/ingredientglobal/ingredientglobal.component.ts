import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../service/ingredient.service';

@Component({
  selector: 'app-ingredientglobal',
  templateUrl: './ingredientglobal.component.html',
  styleUrls: ['./ingredientglobal.component.css']
})
export class IngredientglobalComponent implements OnInit {
    constructor(
        private ingredientService: IngredientService,
    ){}


  ngOnInit() {
  }

}