import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseService } from '../../courses.service';




@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.css']
})
export class CoursesDialogComponent {

  nameControl = new FormControl();
  startDateControl = new FormControl();
  endDateControl = new FormControl();

  courseForm = new FormGroup({
    name: this.nameControl,
    startDate: this.startDateControl,
    endDate: this.endDateControl,
  });


  constructor (
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    private coursesService: CourseService,
    @Inject(MAT_DIALOG_DATA) private courseId?: number
    ){
      if (courseId){
        this.coursesService.getCourseById$(courseId).subscribe({
          next:(c) => {
            if (c) {
              this.courseForm.patchValue(c);
            }
          },
        });
      }
    }

    public get isEditing(): boolean {
      return !!this.courseId;
    }

  onSubmit (): void {
    if(this.courseForm.invalid){
      return this.courseForm.markAllAsTouched();
    } else {
        this.matDialogRef.close(this.courseForm.value);
    }
  }
}
