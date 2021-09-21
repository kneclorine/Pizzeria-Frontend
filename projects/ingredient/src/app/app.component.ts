import { Component } from '@angular/core';
import { IngredientService } from './ingredient/service/ingredient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ingredient';

  constructor (private ingredientService: IngredientService) {
    
  }
}
