import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class CoursesTableComponent {

  @Input()
  dataSource: Course[] = [];

  @Output()
  editCourse = new EventEmitter();
  
  @Output()
  deleteCourse = new EventEmitter();

  displayedColumns = ['id','name','starDate','endDate','actions'];

}
