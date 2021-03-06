import { Component, Input, Output } from "@angular/core";
import { IngredientService } from "projects/ingredient-lib/src/lib/services/ingredient.service";
import { Actions } from "../services/actions";
import { Ingredient } from "../services/ingredient";

@Component({
    selector: 'cap-ingredient-item',
    templateUrl: './ingredientitem.component.html',
    styleUrls: ['./ingredientitem.component.css']
  })

export class IngredientItemComponent{
   
    @Input() ingredient: Ingredient | any
    selected: Actions = Actions.selected
    remove: Actions = Actions.remove
    @Output() deletedIngredient : Ingredient | any

    constructor(private ingredientService: IngredientService){

    }

    get ingredientText(){
        const {name, price} = this.ingredient;
        return `${name}(${price})`;
    }

}
