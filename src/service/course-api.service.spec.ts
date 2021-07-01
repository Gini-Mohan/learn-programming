import { TestBed } from '@angular/core/testing';

import { CourseApiService } from './course-api.service';

describe('CourseApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseApiService = TestBed.get(CourseApiService);
    expect(service).toBeTruthy();
  });
});
