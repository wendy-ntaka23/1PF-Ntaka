import { Component, EventEmitter, Input, Output } from '@angular/core';
import { inscription } from '../../models';

@Component({
  selector: 'app-inscriptions-table',
  templateUrl: './inscriptions-table.component.html',
  styleUrls: ['./inscriptions-table.component.css']
})
export class InscriptionsTableComponent {

  @Input()
    dataSource: inscription[] = [];

    @Output()
    editInscription = new EventEmitter();

    @Output()
    deleteInscription = new EventEmitter();

    displayedColumns = ['id' , 'name' , 'dateBirth' , 'actions'];
}
