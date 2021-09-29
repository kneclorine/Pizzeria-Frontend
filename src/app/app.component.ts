import { Component } from '@angular/core';
import { isLoading$, LoadingService } from 'projects/core-lib/src/lib/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizzeria-Frontend';
  loading$ = isLoading$;
  constructor (public loader: LoadingService){
    this.triggerLoadingIndicator();
  }

  triggerLoadingIndicator() {
    /*this.ingredientService.get("1").subscribe({
      error:()=>console.log("error component"),
      complete:()=>console.log("complete component")
    })*/
  }
  
}
