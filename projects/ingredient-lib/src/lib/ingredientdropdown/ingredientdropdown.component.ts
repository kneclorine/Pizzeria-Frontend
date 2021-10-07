import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IngredientService } from '../services/ingredient.service';
import { Ingredient } from '../services/ingredient';
import { Actions } from '../services/actions';

@Component({
  selector: 'app-ingredientdropdown',
  templateUrl: './ingredientdropdown.component.html',
  styleUrls: ['./ingredientdropdown.component.css']
})
export class IngredientdropdownComponent implements OnInit {

  ingredients: Ingredient[] = new Array<Ingredient>();
  selectedIngredients: Ingredient[] = new Array<Ingredient>();
  default: any;

  private dispose: Subscription | null = null;

  constructor(private ingredientService: IngredientService) { }

  ngOnDestroy(): void {
    this.dispose && this.dispose.unsubscribe();
  }

  ngOnInit(): void {
    this.dispose = this.ingredientService.getAll().subscribe(data => this.ingredients = data);
  }
  addIngredient(ingredient: Ingredient) {
    if (!this.selectedIngredients.includes(ingredient)) {
      let index = this.ingredients.findIndex((element) => element === ingredient);
      this.ingredients.splice(index, 1);
      this.selectedIngredients.push(ingredient);
    }
  }
  removeIngredient(event: Event) {
    //WorkArround: Cast to obtain dataSet
    const nodes = event.composedPath() as HTMLElement[];
    const dataSet = nodes.filter(n => n.dataset && n.dataset.action).map(n => n.dataset)
    const { id, action } = dataSet[0] || {};
    if (action === Actions.remove.toString()) {
      const ingredient = this.selectedIngredients.find(element => id === element.id);
      if (ingredient) {
        this.ingredients.push(ingredient);
        this.selectedIngredients.splice(this.selectedIngredients.indexOf(ingredient), 1);
      }
    }
  }
}
