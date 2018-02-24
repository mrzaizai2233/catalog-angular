import { TestBed, inject } from '@angular/core/testing';

import { MagentoService } from './magento.service';

describe('MagentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoService]
    });
  });

  it('should be created', inject([MagentoService], (service: MagentoService) => {
    expect(service).toBeTruthy();
  }));
});
