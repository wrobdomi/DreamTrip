import { TestBed } from '@angular/core/testing';

import { UserHistoryService } from './user-history.service';

describe('UserHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserHistoryService = TestBed.get(UserHistoryService);
    expect(service).toBeTruthy();
  });
});
