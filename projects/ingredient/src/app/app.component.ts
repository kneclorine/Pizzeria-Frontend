import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { IngredientService } from './ingredient/service/ingredient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ingredient';

  constructor(private permissionsService: NgxPermissionsService, private http: HttpClient) {

  }

  ngOnInit(): void {
    const perm = ["ADMIN", "GUEST", "USER"];

    this.permissionsService.loadPermissions(perm);

    /*this.http.get('/ingredient').subscribe((permissions) => {
      this.permissionsService.loadPermissions(permissions);
    }*/
  }
}
