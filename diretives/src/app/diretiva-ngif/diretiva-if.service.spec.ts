import { TestBed } from '@angular/core/testing';

import { DiretivaIfService } from './diretiva-if.service';

describe('DiretivaIfService', () => {
  let service: DiretivaIfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivaIfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
