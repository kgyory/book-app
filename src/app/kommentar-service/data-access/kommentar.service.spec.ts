import { TestBed } from '@angular/core/testing';

import { KommentarService } from './kommentar.service';

describe('KommentarService', () => {
  let service: KommentarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KommentarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
