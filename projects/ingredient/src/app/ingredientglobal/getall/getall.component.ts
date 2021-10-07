import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actions } from 'ingredient-lib';
import { Ingredient } from '../../service/ingredient';
import { IngredientService } from 'ingredient-lib';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {

  @Input() ingredients: Ingredient[] = new Array<Ingredient>()
  private dispose: Subscription | null = null;
  selected: Actions = Actions.selected

  constructor(private ingredientService: IngredientService) { }

  ngOnDestroy(): void {
    this.dispose && this.dispose.unsubscribe();
  }

  ngOnInit(): void {
    this.dispose = this.ingredientService.getAll().subscribe(data => this.ingredients = data);
  }

  handlerclick(event: any) {

    const dataset = event.target.dataset;
    if(dataset){
      
    }
    if (event.target.tagName == "svg" || event.target.tagName == "path") {
      for (let i = 0; i < this.ingredients.length; i++) {
        if (event.target.closest("div").id == this.ingredients[i].id) {
          this.ingredientService.deleteIngredient(this.ingredients[i].id);
          this.ingredients.splice(i, 1);
        }
      }
    }
    
  }
}
