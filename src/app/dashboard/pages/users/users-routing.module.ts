import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDialogComponent } from './component/user-dialog/user-dialog.component';

const routes: Routes = [
    {
        path:'',
        component: UsersComponent,
    },
    {
        path:'detail/:id',
        component: UserDialogComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }
