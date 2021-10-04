/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetallService } from './getall.service';

describe('Service: Getall', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetallService]
    });
  });

  it('should ...', inject([GetallService], (service: GetallService) => {
    expect(service).toBeTruthy();
  }));
});
