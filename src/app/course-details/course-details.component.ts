import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  @Input() public courseDetails: Course[];
  constructor() { }

  ngOnInit() {
  }

}
