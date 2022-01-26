import { TestBed } from '@angular/core/testing';

import { TestUserService } from './test-user.service';

describe('TestUserService', () => {
  let service: TestUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
