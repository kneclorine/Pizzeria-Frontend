import { Component, OnInit, Output } from '@angular/core';
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

  ingredients: Ingredient[] = new Array<Ingredient>()
  private dispose: Subscription | null = null;
  selected: Actions = Actions.selected

  constructor(private ingredientService: IngredientService){}

  ngOnDestroy(): void {
    this.dispose && this.dispose.unsubscribe();
  }

  ngOnInit(): void {
    this.dispose = this.ingredientService.getAll().subscribe(data => this.ingredients = data);
  }

  

}
