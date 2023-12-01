import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { CourseService } from './courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses$: Observable<Course[]>;

    constructor (
      private coursesService: CourseService,
      private matDialog: MatDialog
      ) {
      this.courses$ = this.coursesService.getCourses$();
    }

    addCourse (): void{
      this.matDialog.open (CoursesDialogComponent).afterClosed().subscribe({
        next : (result) => {
          if (result) {
            this.courses$ = this.coursesService.createCourse$({
              id: new Date (). getTime(),
              name: result.name,
              startDate: result.endDate,
              endDate : result.startDate,
            });
          }
        },
      });
    }

    onDeleteCourse(courseId: number ): void {
      this.courses$ = this.coursesService.deleteCourses$(courseId);
    }

    onEditCourse(courseId: number ): void {
      this.matDialog.open(CoursesDialogComponent, {
        data:courseId,
      }).afterClosed().subscribe({
        next : (result) => {
          if (!!result) {
            this.courses$ = this.coursesService.editCourse$(courseId, result);
          }
        },
      });
    }

}
