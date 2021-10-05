import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/userservices';
import { IndexeddbService } from 'core-lib';
import { User } from '../userinterface';
import { LayoutRouter } from 'core-lib';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends LayoutRouter {

  constructor(
    private UserService: UserService,
    private router: Router,
    private indexeddbService: IndexeddbService,
    private activeRouter: ActivatedRoute) {
    super(activeRouter);
  }
  onSubmit(user: User) {
    const observer = this.UserService.addUser(user);
    const unsuscribe = observer.subscribe((data) => {
      this.indexeddbService.removeUser();
      this.indexeddbService.addUser(data);
      this.router.navigate(["user/login"]);
    });
  }
}