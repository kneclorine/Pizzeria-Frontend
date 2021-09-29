import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpUserService } from '../services/userservices';
import IndexeddbService  from 'projects/core-lib/src/lib/services/indexeddb.service';
import { User } from '../userinterface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  export class RegisterComponent implements OnInit {

   

  constructor(private httpUserService: HttpUserService, private router: Router, private formBuilder: FormBuilder) { 
  
  }
  userForm: FormGroup = new FormGroup({});
  /*userForm = new FormGroup({
    firstName: new FormControl('',),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });*/
  user: User ={
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
      IndexeddbService.removeUser();
      IndexeddbService.addUser(data);
      this.router.navigate(["login"]);
    });
  }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
}



