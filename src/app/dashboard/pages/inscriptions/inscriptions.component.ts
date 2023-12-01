import { Component } from '@angular/core';
import { InscriptionService} from './inscriptions.service';
import { Observable } from 'rxjs';
import { inscription } from './models';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionsDialogComponent } from './components/inscriptions/dialog/inscriptions-dialog.component';



@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css'],
})
export class InscriptionsComponent {
  inscriptions$: Observable<inscription[]>;

  constructor(
    private inscriptionsService: InscriptionService,
    private matDialog: MatDialog
    ) {
    this.inscriptions$ = this.inscriptionsService.getInscriptions$();
  }

  addInscription (): void{
    this.matDialog.open (InscriptionsDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result){
          this.inscriptions$ = this.inscriptionsService.createInscription$({
            id: new Date().getTime(),
            name: result.name,
            dateBirth: result.dateBirth,
          });
        }

      },
    });
  }
  onDeleteInscription(inscriptionId: number): void{
    this.inscriptions$ = this.inscriptionsService.deleteInscription$(inscriptionId);
  }

  onEditInscription(inscriptionId: number): void {
    this.matDialog.open(InscriptionsDialogComponent,{
      data: inscriptionId
    }).afterClosed().subscribe({
      next: (result) => {

      if(!!result){
        this.inscriptions$ = this.inscriptionsService.editInscription$(inscriptionId , result);
      }
      },
    });
  }

}

