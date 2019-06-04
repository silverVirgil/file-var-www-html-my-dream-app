import { TestBed, async, inject } from '@angular/core/testing';

import { SecuriseGuard } from './securise.guard';

describe('SecuriseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecuriseGuard]
    });
  });

  it('should ...', inject([SecuriseGuard], (guard: SecuriseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
