import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InscriptionService } from '../../../inscriptions.service';


@Component({
  selector: 'app-inscriptions-dialog',
  templateUrl: './inscriptions-dialog.component.html',
  styleUrls: ['./inscriptions-dialog.component.css']
})
export class InscriptionsDialogComponent {

  nameControl = new FormControl();
  dateBirthControl = new FormControl();

  inscriptionForm = new FormGroup({

    name: this.nameControl,
    dateBirth: this.dateBirthControl,
  });

  constructor(
    private matDialogRef: MatDialogRef<InscriptionsDialogComponent>,
    private inscriptionsService: InscriptionService,
    @Inject (MAT_DIALOG_DATA) private inscriptionId ?: number
  ) {
    if (inscriptionId) {
      this.inscriptionsService.getInscriptionById$(inscriptionId).subscribe({
        next: (c) => {
          if (c) {
            this.inscriptionForm.patchValue(c);
          }
        },
      });
    }
  }

  public get isEditing(): boolean {
    return !!this.inscriptionId;
  }

  onSubmit (): void {
    if (this.inscriptionForm.invalid){
      return this.inscriptionForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.inscriptionForm.value);
    }
  }
}
