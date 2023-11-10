import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IconsModule } from './pages/icons/icons.module';
import { FormsModule as FormsPageModule } from './pages/forms/forms.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { HomeModule } from './pages/home/home.module';
import { RouterModule } from '@angular/router';
import { CoursesModule } from './pages/courses/courses.module';
import { StudentsModule } from './pages/students/students.module';
import { InscriptionsModule } from './pages/inscriptions/inscriptions.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    IconsModule,
    FormsPageModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    HomeModule,
    RouterModule,
    CoursesModule,
    StudentsModule,
    InscriptionsModule,
  
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
