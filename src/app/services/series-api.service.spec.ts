import { TestBed } from '@angular/core/testing';

import { SeriesApiService } from './series-api.service';

describe('SeriesApiService', () => {
  let service: SeriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
