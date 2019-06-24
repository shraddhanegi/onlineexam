import { TestBed } from '@angular/core/testing';

import { ShowQuestionairService } from './show-questionair.service';

describe('ShowQuestionairService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowQuestionairService = TestBed.get(ShowQuestionairService);
    expect(service).toBeTruthy();
  });
});
