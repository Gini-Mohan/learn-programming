import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from '../model/course.model';

import { CourseDetailsComponent } from './course-details.component';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {    
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
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
    component.courseDetails = details;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all the details in the table', () => {
    expect(component).toBeTruthy();    
    expect(fixture.debugElement.nativeElement.querySelector('#course-name').innerHTML).toBe('React - basics');    
    expect(fixture.debugElement.nativeElement.querySelector('#course-description').innerHTML).toBe('This course is going to take you through basics of React.');    
    expect(fixture.debugElement.nativeElement.querySelector('#course-author').innerHTML).toBe('James White');    
    expect(fixture.debugElement.nativeElement.querySelector('#course-date').innerHTML).toBe('12/03/2019');  
    expect(fixture.debugElement.nativeElement.querySelector('#course-duration').innerHTML).toBe('00:03:56');   
    expect(fixture.debugElement.nativeElement.querySelector('#btn-add').innerHTML).toBe('Add');
  });

  it('should display button label remove if saved is true', () => {
    let details1: Course[] = [];
    let course2 = {
      name: "React - basics",
      description: "This course is going to take you through basics of React.",
      author: "James White",
      publishDate: "12/03/2019",
      duration: "00:03:56",
      image : "https://cdn.auth0.com/blog/react-js/react.png",
      saved:true
    }
    details1.push(course2);
    component.courseDetails = details1;
    fixture.detectChanges();
    expect(component).toBeTruthy();    
    expect(fixture.debugElement.nativeElement.querySelector('#btn-remove').innerHTML).toBe('Remove');
  });

  it('should display nothing if details is an empty array', () => {
    let details1: Course[] = [];   
    component.courseDetails = details1;
    fixture.detectChanges();
    expect(component).toBeTruthy();    
  });

  it('should sort based on the duration', () => {
    let details1: Course[] = [];
    let course2 = {
      name: "React - basics",
      description: "This course is going to take you through basics of React.",
      author: "James White",
      publishDate: "12/03/2019",
      duration: "00:03:56",
      image : "https://cdn.auth0.com/blog/react-js/react.png",
      saved:true
    }
    let course1 = {
      name: "Vue - learn vue in an hour",
      description: "This course teaches you how to build a vue application in an hour.",
      author: "Michael Brown",
      publishDate: "17/10/2019",
      duration: "00:00:59",
      image: "https://vuejs.org/images/logo.png",
      saved:true
    }
    details1.push(course1);
    details1.push(course2);
    component.courseDetails = details1;
    fixture.detectChanges();
    expect(component).toBeTruthy(); 
    component.sort("duration", true);
    expect(component.courseDetails[0].author).toBe('James White'); 
  });

  it('should sort based on the duration -ascending', () => {
    let details1: Course[] = [];
    let course2 = {
      name: "React - basics",
      description: "This course is going to take you through basics of React.",
      author: "James White",
      publishDate: "12/03/2019",
      duration: "00:03:56",
      image : "https://cdn.auth0.com/blog/react-js/react.png",
      saved:true
    }
    let course1 = {
      name: "Vue - learn vue in an hour",
      description: "This course teaches you how to build a vue application in an hour.",
      author: "Michael Brown",
      publishDate: "17/10/2019",
      duration: "00:00:59",
      image: "https://vuejs.org/images/logo.png",
      saved:true
    }
    details1.push(course1);
    details1.push(course2);
    component.courseDetails = details1;
    fixture.detectChanges();
    expect(component).toBeTruthy(); 
    component.sort("duration", false);
    expect(component.courseDetails[0].author).toBe('Michael Brown'); 
  });
  it('should add new item in the cart', () => {
    let details1: Course[] = [];
    let course2 = {
      name: "React - basics",
      description: "This course is going to take you through basics of React.",
      author: "James White",
      publishDate: "12/03/2019",
      duration: "00:03:56",
      image : "https://cdn.auth0.com/blog/react-js/react.png",
      saved:true
    }
    let course1 = {
      name: "Vue - learn vue in an hour",
      description: "This course teaches you how to build a vue application in an hour.",
      author: "Michael Brown",
      publishDate: "17/10/2019",
      duration: "00:00:59",
      image: "https://vuejs.org/images/logo.png",
      saved:true
    }
    details1.push(course1);
    details1.push(course2);
    component.courseDetails = details1;
    fixture.detectChanges();
    expect(component).toBeTruthy(); 
    component.addNewItem(course1);
    expect(component.courseDetails[0].saved).toBe(true); 
  });
});
