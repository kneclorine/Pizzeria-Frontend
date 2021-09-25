/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CapInputComponent } from './cap-input.component';

describe('CapInputComponent', () => {
  let component: CapInputComponent;
  let fixture: ComponentFixture<CapInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
