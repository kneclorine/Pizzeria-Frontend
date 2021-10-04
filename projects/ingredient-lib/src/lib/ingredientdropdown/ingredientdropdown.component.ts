import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetallService } from '../services/getall.service';
import { Ingredient } from '../services/ingredient';

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

  constructor(private ingredientService: GetallService) { }

  ngOnDestroy(): void {
    this.dispose && this.dispose.unsubscribe();
  }

  ngOnInit(): void {
    this.dispose = this.ingredientService.getAll().subscribe(data => this.ingredients = data);
  }
  addIngredient(event: any){
    if(!this.selectedIngredients.includes(event)){
      let index = this.ingredients.findIndex((element) => element == event);
      this.ingredients.splice(index,1);
      this.selectedIngredients.push(event);
    }
  }
  removeIngredient(event:any){
    if(event.target.tagName == "svg" || event.target.tagName == "path" ){
      for(let i = 0; i < this.selectedIngredients.length; i++){
        if(event.target.closest("div").id == this.selectedIngredients[i].id){
          this.ingredients.push(this.selectedIngredients[i]);
          this.selectedIngredients.splice(i, 1);
        }
      }
    }
  }
}
