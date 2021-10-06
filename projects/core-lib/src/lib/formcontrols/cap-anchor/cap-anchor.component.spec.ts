/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CapAnchorComponent } from './cap-anchor.component';

describe('CapAnchorComponent', () => {
  let component: CapAnchorComponent;
  let fixture: ComponentFixture<CapAnchorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapAnchorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
