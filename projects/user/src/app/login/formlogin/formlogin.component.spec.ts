/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormloginComponent } from './formlogin.component';

describe('FormloginComponent', () => {
  let component: FormloginComponent;
  let fixture: ComponentFixture<FormloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
