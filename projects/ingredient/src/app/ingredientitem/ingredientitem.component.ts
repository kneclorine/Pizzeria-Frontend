import { Component, Input, Output } from "@angular/core";
import { Ingredient } from "../service/ingredient";
import { Actions } from "../service/actions";
import { IngredientService } from "../service/ingredient.service";

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

    handlerclick(event:any){ 
        if(event.target.tagName == "svg") {
            console.log(this.ingredient.id)
          this.ingredientService.deleteIngredient(this.ingredient.id)
        }
       
      }
}
