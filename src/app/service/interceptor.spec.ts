import { TestBed, inject } from '@angular/core/testing';

import { Interceptor } from './interceptor';

describe('Interceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Interceptor]
    });
  });

  it('should be created', inject([Interceptor], (service: Interceptor) => {
    expect(service).toBeTruthy();
  }));
});
