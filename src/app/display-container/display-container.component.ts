import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CourseApiService } from "src/service/course-api.service";
import { Course } from "../model/course.model";

@Component({
  selector: "app-display-container",
  templateUrl: "./display-container.component.html",
  styleUrls: ["./display-container.component.scss"],
})
export class DisplayContainerComponent implements OnInit {
  public propertyDetails$: Observable<Course[]>;
  public courseDetails: Course[];
  public allCourseDetails: Course[];
  constructor(private apiService: CourseApiService) {}

  public async ngOnInit() {
    this.propertyDetails$ = this.apiService.getProperties();
    this.propertyDetails$.subscribe((x) => {
      this.courseDetails = x;
      this.allCourseDetails = x;
    });
  }

  public onSearchChange(input) {
    if (input) {
      this.courseDetails = this.filterCourseList(input);
    } else {
      this.courseDetails = this.allCourseDetails;
    }
  }

  // this is where filtering the data happens according to you typed value
  filterCourseList(val) {
    var categoryList = this.courseDetails;
    if (typeof val != "string") {
      return [];
    }
    if (val === "" || val === null) {
      return [];
    }
    return val
      ? categoryList.filter(
          (s) => s.name.toLowerCase().indexOf(val.toLowerCase()) != -1
        )
      : this.courseDetails;
  }
}
