import { Component, OnInit } from '@angular/core';
import { IngredientService } from './service/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  providers: [IngredientService]
})
export class IngredientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
