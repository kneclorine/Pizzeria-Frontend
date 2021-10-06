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
  removeIngredient(event:Event){
    //WorkArround: Cast to obtain dataSet
   const nodes=  event.composedPath() as HTMLElement[];
   const dataSet = nodes.filter(n=>n.dataset && n.dataset.action).map(n=>n.dataset)
   const {id,action} = dataSet[0] || {};
   
    if(action == "2"){
      for(let i = 0; i < this.selectedIngredients.length; i++){
        this.ingredients.push(this.selectedIngredients[i]);
        this.selectedIngredients.splice(i, 1);
      }
    }
  }
}
