import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpUserService } from './services/userservices';
import { User } from './userinterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpUserService: HttpUserService, private router: Router) { 
    
  }
  

  
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });
  user: User={
    name: '',
    lastName: '',
    email: '',
    password: ''
  }
  

  onSubmit() {
    this.user.name = this.userForm.get('firstName')?.value;
    this.user.lastName = this.userForm.get('lastName')?.value;
    this.user.email = this.userForm.get('email')?.value;
    this.user.password = this.userForm.get('password')?.value;
    const observer = this.httpUserService.addUser(this.user);
    const unsuscribe = observer.subscribe((data) => {
      this.userForm.reset();
      localStorage.setItem('user',JSON.stringify(data));
      this.router.navigate([ "login"]);
    },(error)=>{
       console.log(error);
    }
    );
  }
}
