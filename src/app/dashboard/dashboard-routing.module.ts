import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/users/components/user-detail/user-detail.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { StudentsComponent } from './pages/students/students.component';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path:'',
                component: DashboardComponent,
                children:[

                    {
                        path: 'home',
                        component: HomeComponent,
                    },
                    {
                        path:'courses',
                        loadChildren:()=> import ('./pages/courses/courses.module').then((m) => m.CoursesModule),
                    },
                    {
                        path:'users',
                        loadChildren:()=> import ('./pages/users/users.module').then((m) => m.UsersModule),
                    },
                    {
                        path: 'students',
                        loadChildren:()=> import ('./pages/students/students.module').then((m) => m.StudentsModule ),
                    },
                    {
                        path: 'inscriptions',
                        loadChildren:()=> import ('./pages/inscriptions/inscriptions.module').then((m)=> m.InscriptionsModule ),
                    },
                    {
                        path:'**',
                        redirectTo: 'users',
                    }
    
    
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }