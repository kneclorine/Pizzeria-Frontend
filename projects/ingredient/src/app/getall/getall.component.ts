import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actions } from '../service/actions';
import { Ingredient, IngredientCreateDTO, IngredientUpdateDTO } from '../service/ingredient';
import { IngredientService } from '../service/ingredient.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {

  @Input() ingredients: Ingredient[] = new Array<Ingredient>()
  private disposables: Subscription[] | null = null;
  selectedIngredient: Ingredient | undefined = undefined;

  constructor(private ingredientService: IngredientService) { }

  ngOnDestroy(): void {
    this.disposables?.forEach(dispose => {
      dispose && dispose.unsubscribe();
    });
    this.disposables = [];
  }

  ngOnInit(): void {
    const dispose = this.ingredientService.getAll().subscribe(data => this.ingredients = data);
    this.disposables?.push(dispose)
  }
  update(ingredient: IngredientUpdateDTO) {
    this.selectedIngredient = ingredient;
    let dispose: Subscription | null = null;
    dispose = this.ingredientService.updateIngredient(ingredient.id, ingredient).subscribe((data) => {
      this.ingredients.push(data);
      this.initializeSelectedIngredient();
      dispose && dispose.unsubscribe();

    })
  }
  add(ingredient: IngredientCreateDTO) {
    this.selectedIngredient = { id: '', ...ingredient };
    let dispose: Subscription | null = null;
    dispose = this.ingredientService.createIngredient(ingredient).subscribe((data) => {
      this.ingredients.push(data);
      this.initializeSelectedIngredient();
      dispose && dispose.unsubscribe();
    })
  }

  private initializeSelectedIngredient() {
    this.selectedIngredient = undefined;
  }
  handlerclick(event: Event) {
    const nodes = event.composedPath() as HTMLElement[];
    const dataSet = nodes.filter(n => n.dataset && n.dataset.action).map(n => n.dataset)
    const { id, action } = dataSet[0] || {};
    const ingredient = this.ingredients.find(element => id === element.id);
    if (action === Actions.remove.toString()) {
      if (ingredient) {
        this.ingredientService.deleteIngredient(ingredient.id).subscribe(() => {
          this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
        });
      }
    } else if (action === Actions.selected.toString()) {
      this.ingredientService.updateIngredient(ingredient!.id, this.selectedIngredient!)
      let dispose: Subscription | null = null;
      dispose = this.ingredientService.updateIngredient(ingredient!.id, this.selectedIngredient!).subscribe((data) => {
        this.ingredients.push(data);
        this.initializeSelectedIngredient();
        dispose && dispose.unsubscribe();
      })
    }
  }
}
