import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  @Input() public courseDetails: Course[];
  
  public autoCompleteList: Course[];  
  booleanValue: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  sort(colName, boolean) {
    if (boolean == true){
      this.courseDetails.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
      this.booleanValue = !this.booleanValue
  }
  else{
      this.courseDetails.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
      this.booleanValue = !this.booleanValue
  }
  }

}
