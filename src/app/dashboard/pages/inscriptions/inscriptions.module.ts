import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsComponent } from './inscriptions.component';
import { InscriptionsTableComponent } from './components/inscriptions-table/inscriptions-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { InscriptionsDialogComponent } from './components/inscriptions/dialog/inscriptions-dialog.component';




@NgModule({
  declarations: [
    InscriptionsComponent,
    InscriptionsTableComponent,
    InscriptionsDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscriptionsRoutingModule
  ]
})
export class InscriptionsModule { }
