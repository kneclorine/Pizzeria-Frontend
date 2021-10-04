import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actions } from '../service/actions';
import { Ingredient, IngredientCreateDTO } from '../service/ingredient';
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
  selectedIngredients: Ingredient[] = new Array <Ingredient>()

  constructor(private ingredientService: IngredientService){}

  ngOnDestroy(): void {
    this.dispose && this.dispose.unsubscribe();
  }

  ngOnInit(): void {
    this.dispose = this.ingredientService.getAll().subscribe(data => this.ingredients = data);
  }
  handlerclick(event:any){ 
    if(event) {
       this.selectedIngredients.push()//TODO llenar lista
       console.log(this.selectedIngredients)
    }
    //TODO: me ha dicho Pedro que aquí tengo que escribir un IF
  }

}
