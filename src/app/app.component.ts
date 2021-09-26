import { Component } from '@angular/core';
import { IndexeddbService } from 'projects/core-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizzeria-Frontend';

  indexedDBService : IndexeddbService = new IndexeddbService;
}
