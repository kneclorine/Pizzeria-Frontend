import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpUserService } from './services/userservices';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  constructor(private httpUserService: HttpUserService){}
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  title = 'user';

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('',  Validators.required),
    email: new FormControl('',  Validators.required)
  });

  destroy$: Subject<boolean> = new Subject<boolean>();
  HttpUserService: any;

  onSubmit() {
    this.HttpUserService.addUser(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.userForm.reset();
    });
  }
}
