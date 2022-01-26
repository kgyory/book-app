import { TestBed } from '@angular/core/testing';

import { DefaultKommentarService } from './default-kommentar.service';

describe('DefaultKommentarService', () => {
  let service: DefaultKommentarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultKommentarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
