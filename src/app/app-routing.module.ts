import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { UserDetailComponent } from './dashboard/pages/users/components/user-detail/user-detail.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { StudentsComponent } from './dashboard/pages/students/students.component';
import { InscriptionsComponent } from './dashboard/pages/inscriptions/inscriptions.component';
import { dashboardGuard } from './core/guards/dashboard.guard';




const routes: Routes = [
    {
        path: 'dashboard',
        canActivate:[dashboardGuard],
        loadChildren: () =>
        import ('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path:'auth',
        loadChildren:()=> import ('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path:'**',
        redirectTo:'auth',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

