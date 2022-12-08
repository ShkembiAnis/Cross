import { TestBed } from '@angular/core/testing';

import { SpaceAstrosService } from './space-astros.service';

describe('SpaceAstrosService', () => {
  let service: SpaceAstrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceAstrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
