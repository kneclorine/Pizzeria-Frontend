import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/userservices';
import {IndexeddbService}  from 'core-lib';
import { User } from '../userinterface';
import { LayoutRouter} from 'core-lib';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',  
})
export class RegisterComponent extends LayoutRouter{
  
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    policies: new FormControl(false, Validators.requiredTrue),
    consent: new FormControl(false, Validators.requiredTrue),
  });
  user: User={
    name: '',
    lastName: '',
    email: '',
    password: ''
  }
  
  
  constructor(
    private UserService: UserService, 
    private router: Router, 
    private formBuilder: FormBuilder, 
    private indexeddbService: IndexeddbService,
    private activeRouter: ActivatedRoute) {
      super(activeRouter);
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.user = this.userForm.value;      
      const observer = this.UserService.addUser(this.user);
      const unsuscribe = observer.subscribe((data) => {
        this.indexeddbService.removeUser();
        this.indexeddbService.addUser(data);
        this.router.navigate(["user/login"]);
      });
    }
  }
}