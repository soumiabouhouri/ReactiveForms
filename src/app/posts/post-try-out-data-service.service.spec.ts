import { TestBed } from '@angular/core/testing';

import { PostTryOutDataServiceService } from './post-try-out-data-service.service';

describe('PostTryOutDataServiceService', () => {
  let service: PostTryOutDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTryOutDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
