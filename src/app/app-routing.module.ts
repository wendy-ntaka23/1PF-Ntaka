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




const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'users',
                component: UsersComponent,
            
            },
            {
                path : 'users/detail/:id',
                component: UserDetailComponent
            },
            {
                path: 'courses',
                component: CoursesComponent,
            },
            {
                path: 'students',
                component: StudentsComponent,
            },
            {
                path: 'inscriptions',
                component: InscriptionsComponent,
            },
            {
                path: '**',
                redirectTo: 'users',
            },
        ],
    },
    {
        path: 'auth',
        component: AuthComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

