import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../services/userservices';
import { IndexeddbService }  from 'core-lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loadLayout:boolean = true;
  constructor(private userservice: UserService, 
    private router: Router, 
    private activeRoute : ActivatedRoute,
    private indexeddbService: IndexeddbService) { 
    
   }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  

  onSubmit() {
    const observer = this.userservice.login(this.loginForm.value);
    const unsuscribe = observer.subscribe((data) => {
      if(data){
        this.indexeddbService.removeUser();
        this.indexeddbService.addUser(data);
        this.router.navigate(["user/register"]);
      }
    });
  }
  onRedirect(){
    this.router.navigate(["user/register"]);
  }
  
  ngOnInit(): void {
    this.activeRoute.data.subscribe((data)=>{
       this.loadLayout = data.loadLayout
    })
  }

}
