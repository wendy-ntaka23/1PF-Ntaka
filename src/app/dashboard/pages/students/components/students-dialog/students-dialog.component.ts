import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.css']
})
export class StudentsDialogComponent {
 
  lastnameControl= new FormControl();
  numeroDniControl= new FormControl();


  studentForm = new FormGroup({

    lastname: this.lastnameControl,
    numeroDNI: this.numeroDniControl,
  });

  constructor(private matDialogRef: MatDialogRef<StudentsDialogComponent>){}

  onSubmit(): void{
    if (this.studentForm.invalid){
      return this.studentForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.studentForm.value);

    }


  }
}
