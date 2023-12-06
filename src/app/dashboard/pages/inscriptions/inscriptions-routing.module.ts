import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { InscriptionsComponent } from './inscriptions.component';



@NgModule({
    imports: [
        RouterModule.forChild([
        {
            
                path: '',
                component: InscriptionsComponent,
            
        },

    ]),
],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class InscriptionsRoutingModule{ }
