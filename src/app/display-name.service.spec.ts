import { TestBed } from '@angular/core/testing';

import { DisplayNameService } from './display-name.service';

describe('DisplayNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayNameService = TestBed.get(DisplayNameService);
    expect(service).toBeTruthy();
  });
});
