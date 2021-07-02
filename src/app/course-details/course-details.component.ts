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

  addNewItem(course: Course){    
    // save the properties if not exists
    this.courseDetails.find(x => x.name === course.name).saved = true;
 }

 removeItem(course: Course){    
  // save the properties if not exists
  this.courseDetails.find(x => x.name === course.name).saved = false;
}

}
