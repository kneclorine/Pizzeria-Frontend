import { Component, Input, Output } from "@angular/core";
import { Actions } from "../../service/actions";
import { Ingredient } from "../../service/ingredient";
import { IngredientService } from "../../service/ingredient.service";

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
