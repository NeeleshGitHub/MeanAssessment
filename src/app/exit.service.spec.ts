import { TestBed, inject } from '@angular/core/testing';

import { ExitService } from './exit.service';

describe('ExitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExitService]
    });
  });

  it('should be created', inject([ExitService], (service: ExitService) => {
    expect(service).toBeTruthy();
  }));
});
