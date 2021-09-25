import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpUserService } from '../services/userservices';
import userStorage from 'projects/core-lib/src/lib/user/userStorage';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  export class RegisterComponent implements OnInit {

  constructor(private httpUserService: HttpUserService, private router: Router) { 
  }
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
    phone : new FormControl ('', Validators.required)
  });
  onSubmit() {
    const observer = this.httpUserService.addUser(this.userForm.value);
    const unsuscribe = observer.subscribe(async (data) => {
      await userStorage.addUser(data);
      this.router.navigate([""]);
    });
  }
  ngOnInit(): void {
  }
}
