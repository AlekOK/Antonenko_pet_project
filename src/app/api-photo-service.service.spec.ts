import { TestBed } from '@angular/core/testing';

import { ApiPhotoServiceService } from './api-photo-service.service';

describe('ApiPhotoServiceService', () => {
  let service: ApiPhotoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPhotoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
