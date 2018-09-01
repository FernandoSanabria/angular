import { TestBed, inject } from '@angular/core/testing';

import { GirlService } from './girl.service';

describe('GirlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GirlService]
    });
  });

  it('should be created', inject([GirlService], (service: GirlService) => {
    expect(service).toBeTruthy();
  }));
});
