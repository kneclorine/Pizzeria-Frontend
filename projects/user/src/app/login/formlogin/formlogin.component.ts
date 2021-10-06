import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserLogin } from '../../logininterface';

@Component({
  selector: 'user-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit{
  @Output() submit = new EventEmitter<UserLogin>();

  constructor(private activatedRoute: ActivatedRoute){
  }

  pathLayout : string ='register';
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  onSubmit($event:any){
    $event.stopPropagation();
    $event.preventDefault();
    if(this.formGroup.valid){
      this.submit.emit(this.formGroup.value)
    }
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data)=>{
      if(data.path==="user/login"){
        this.pathLayout = "user/register"
      }else{
        this.pathLayout = "register";
      }
       
    })
  }
}
