/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CapImgComponent } from './cap-img.component';

describe('CapImgComponent', () => {
  let component: CapImgComponent;
  let fixture: ComponentFixture<CapImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
