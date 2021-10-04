import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../logininterface';
import { HttpUserService } from '../services/userservices';
import { IndexeddbService }  from 'core-lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpUserService: HttpUserService, private router: Router, private indexeddbService: IndexeddbService) { 
    
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  userLogin: UserLogin={
    email: '',
    password: ''
  }
  

  onSubmit() {
    this.userLogin.email = this.loginForm.get('email')?.value;
    this.userLogin.password = this.loginForm.get('password')?.value;
    const observer = this.httpUserService.login(this.userLogin);
    const unsuscribe = observer.subscribe((data) => {
      if(data){
        this.indexeddbService.removeUser();
        this.indexeddbService.addUser(data);
        this.router.navigate(["register"]);
      }
    });
  }
  onRedirect(){
    this.router.navigate(["register"]);
  }
  
  ngOnInit(): void {
  }

}
