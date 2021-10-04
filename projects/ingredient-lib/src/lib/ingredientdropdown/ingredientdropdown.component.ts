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
 
  private dispose: Subscription | null = null;

  constructor(private ingredientService: GetallService) { }

  ngOnDestroy(): void {
    this.dispose && this.dispose.unsubscribe();
  }

  ngOnInit(): void {
    this.dispose = this.ingredientService.getAll().subscribe(data => this.ingredients = data);
  }
  handlerclick(ev:any){ 
    //TODO: Comprobar con un if que se ha hecho click en la
    console.log("prueba")
  }

}
