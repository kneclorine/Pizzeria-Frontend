import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserService } from '../services/interfaceuserservice';
import { IndexeddbService, LayoutRouter } from 'core-lib';
import { User } from '../userinterface';
import { UserService } from '../services/userservices';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends LayoutRouter implements OnInit  {
 
  loadLayout:boolean = true;
  constructor(
    private userService: UserService,
    private router: Router,
    private indexeddbService: IndexeddbService,
    private activeRouter: ActivatedRoute) {
    super(activeRouter);
  }
  onSubmit(user: User) {
    const observer = this.userService.addUser(user);
    const unsuscribe = observer.subscribe((data) => {
      this.indexeddbService.removeUser();
      this.indexeddbService.addUser(data);
      this.router.navigate(["user/login"]);
    });
  }
  ngOnInit(): void {
    this.activeRouter.data.subscribe((data)=>{
       this.loadLayout = data.loadLayout
    })
  }
}