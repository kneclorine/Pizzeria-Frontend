import { Component } from '@angular/core';
import indexeddbService from 'projects/core-lib/src/lib/services/indexeddb.service';
import { db, table } from 'projects/core-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user'
  constructor(){
    indexeddbService.createDB(db,table);
  }
    
}
