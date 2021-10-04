import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Ingredient } from "../service/ingredient";
import { IngredientService } from "../service/ingredient.service";

@Component({
    selector: 'cap-ingredient',
    templateUrl: './ingredient.component.html',
    styleUrls: ['./ingredient.component.css']
  })

export class IngredientComponent implements OnInit, OnDestroy{
    
    ingredients: Ingredient[] = new Array<Ingredient>()
    private dispose: Subscription | null = null;

    constructor(private ingredientService: IngredientService){}

    ngOnDestroy(): void {
      this.dispose && this.dispose.unsubscribe();
    }

    ngOnInit(): void {
      this.dispose = this.ingredientService.getAll().subscribe(data => this.ingredients = data);
    }
    handlerclick(ev:any){ 
      //TODO: me ha dicho Pedro que aquí tengo que escribir un IF
    }
}
