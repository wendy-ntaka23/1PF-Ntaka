import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../courses/models';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent {

  @Input()
  dataSource: Student[] = [];

  @Output()
  editStudent = new EventEmitter();

  @Output()
  deleteStudent = new EventEmitter();

  displayedColumns = ['id','lastname','numeroDNI','actions'];

}
