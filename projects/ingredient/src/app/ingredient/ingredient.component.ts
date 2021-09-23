import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from './ingredient';
import { IngredientService } from './service/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  providers: [IngredientService]
})
export class IngredientComponent implements OnInit, OnDestroy {

  private dispose: Subscription | null = null;
  public ingredients = new Array<Ingredient>();
  public selectedIngredient: Ingredient | null= null;

  constructor(private ingredientService: IngredientService) { }
  
  ngOnInit(): void {
    this.dispose = this.ingredientService.getAll().subscribe((data)=>this.ingredients = data);
  }
  
  ngOnDestroy(): void {
    this.dispose && this.dispose.unsubscribe();
  }


}
