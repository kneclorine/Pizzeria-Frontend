/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CapImguploadComponent } from './cap-imgupload.component';

describe('CapImguploadComponent', () => {
  let component: CapImguploadComponent;
  let fixture: ComponentFixture<CapImguploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapImguploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapImguploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
