import { TestBed, inject } from '@angular/core/testing';

import { PlotsManagementService } from './plots-management.service';

describe('PlotsManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlotsManagementService]
    });
  });

  it('should be created', inject([PlotsManagementService], (service: PlotsManagementService) => {
    expect(service).toBeTruthy();
  }));
});
