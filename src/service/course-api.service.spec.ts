import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CourseApiService } from './course-api.service';

describe('CourseApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CourseApiService],
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: CourseApiService = TestBed.get(CourseApiService);
    expect(service).toBeTruthy();
  });
});
