
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpUserService } from '../services/userservices';
import IndexeddbService from 'projects/core-lib/src/lib/services/indexeddb.service';
import { db, key, table } from 'projects/core-lib/src/public-api';
import { User } from '../userinterface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
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
  constructor(private httpUserService: HttpUserService, private router: Router, private formBuilder: FormBuilder) {
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.user.name = this.userForm.get("firstName")?.value;
      this.user.lastName = this.userForm.get("lastName")?.value;
      this.user.email = this.userForm.get("email")?.value;
      this.user.password = this.userForm.get("password")?.value;
      const observer = this.httpUserService.addUser(this.user);
      const unsuscribe = observer.subscribe((data) => {
        IndexeddbService.clearStore(db, table);
        IndexeddbService.addItem(db, table, data, key);
        this.router.navigate(["login"]);
      });
    }
  }

}