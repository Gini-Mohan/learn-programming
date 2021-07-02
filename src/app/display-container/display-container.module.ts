import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DisplayContainerComponent } from "./display-container.component";
import { CourseDetailsModule } from "../course-details/course-details.module";

@NgModule({
  declarations: [DisplayContainerComponent],
  imports: [CommonModule, CourseDetailsModule],
  exports: [DisplayContainerComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DisplayContainerModule {}
