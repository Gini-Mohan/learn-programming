import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseApiService } from 'src/service/course-api.service';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-display-container',
  templateUrl: './display-container.component.html',
  styleUrls: ['./display-container.component.scss']
})
export class DisplayContainerComponent implements OnInit {

  public propertyDetails$: Observable<Course[]>;
  public courseDetails: Course[];  
  public autoCompleteList: Course[];
    constructor(private apiService: CourseApiService) { }
  
    public async ngOnInit() {
      this.propertyDetails$ = this.apiService.getProperties()
      this.propertyDetails$.subscribe( x=> {
        this.courseDetails = x;
      })
     }

}
