import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { IUserService } from '../services/interfaceuserservice';
import { IndexeddbService, LayoutRouter }  from 'core-lib';
import { UserLogin } from '../logininterface';
import { UserService } from '../services/userservices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends LayoutRouter implements OnInit {

  loadLayout:boolean = true;
  constructor(
    private userService: UserService, 
    private router: Router, 
    private activeRouter : ActivatedRoute,
    private indexeddbService: IndexeddbService){ 
      super(activeRouter);
   }

  onSubmit(user: UserLogin) {
    const observer = this.userService.login(user);
    const unsuscribe = observer.subscribe((data) => {
      if(data){
        this.indexeddbService.removeUser();
        this.indexeddbService.addUser(data);
        this.router.navigate(["user/register"]);
      }
    });
  }
  
  ngOnInit(): void {
    this.activeRouter.data.subscribe((data)=>{
       this.loadLayout = data.loadLayout
    })
  }

}
