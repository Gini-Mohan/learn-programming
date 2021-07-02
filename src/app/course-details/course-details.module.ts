import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './course-details.component';



@NgModule({
  declarations: [CourseDetailsComponent],
  imports: [
    CommonModule
  ],exports: [CourseDetailsComponent]
})
export class CourseDetailsModule { }
