import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from './ingredient/ingredient';
import { IngredientService } from './service/ingredient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ingredient';

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
