import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDetailsModule } from '../course-details/course-details.module';
import { Course } from '../model/course.model';

import { DisplayContainerComponent } from './display-container.component';

describe('DisplayContainerComponent', () => {
  let component: DisplayContainerComponent;
  let fixture: ComponentFixture<DisplayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayContainerComponent ],
      imports: [ CourseDetailsModule,
        HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let details: Course[] = [];
    let course1 = {
      name: "React - basics",
      description: "This course is going to take you through basics of React.",
      author: "James White",
      publishDate: "12/03/2019",
      duration: "00:03:56",
      image : "https://cdn.auth0.com/blog/react-js/react.png",
      saved:false
    }
    details.push(course1);
    fixture = TestBed.createComponent(DisplayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
