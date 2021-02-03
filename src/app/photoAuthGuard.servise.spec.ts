import { TestBed } from '@angular/core/testing';

import { PhotoAuthGuardService } from './photoAuthGuard.service';

describe('PhotoService', () => {
  let service: PhotoAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
