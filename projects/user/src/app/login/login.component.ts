import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../logininterface';
import { HttpUserService } from '../services/userservices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpUserService: HttpUserService, private router: Router) { 
    
  }
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });
  userLogin: UserLogin={
    email: '',
    password: ''
  }
  

  onSubmit() {
    /*this.userLogin.email = this.userForm.get('email')?.value;
    this.userLogin.password = this.userForm.get('password')?.value;
    const observer = this.httpUserService.login(this.userLogin);
    const unsuscribe = observer.subscribe((data) => {
      this.userForm.reset();
      if(data){
        localStorage.setItem('user',JSON.stringify(data));
        this.router.navigate(["login"]);
      }*/
  }

  ngOnInit(): void {
  }

}
