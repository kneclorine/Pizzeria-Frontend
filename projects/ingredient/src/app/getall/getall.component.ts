import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actions } from '../service/actions';
import { Ingredient } from '../service/ingredient';
import { IngredientService } from '../service/ingredient.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {

  @Input() ingredients: Ingredient[] = new Array<Ingredient>()
  private dispose: Subscription | null = null;
  selectedIngredient: Ingredient | null = null;

  constructor(private ingredientService: IngredientService) { }

  ngOnDestroy(): void {
    this.dispose && this.dispose.unsubscribe();
  }

  ngOnInit(): void {
    this.dispose = this.ingredientService.getAll().subscribe(data => this.ingredients = data);
  }

  handlerclick(event: Event) {

    const nodes=  event.composedPath() as HTMLElement[];
    const dataSet = nodes.filter(n=>n.dataset && n.dataset.action).map(n=>n.dataset)
    const {id,action} = dataSet[0] || {};
    
    if(action === Actions.remove.toString()){
      const ingredient = this.ingredients.find(element => id === element.id);
      if (ingredient) {
        this.ingredientService.deleteIngredient(ingredient.id);
        this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
      }
     }
  }
}
