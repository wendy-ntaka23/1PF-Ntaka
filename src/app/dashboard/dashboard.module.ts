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
import { HomeModule } from './pages/home/home.module';
import { DashboardRoutingModule } from './dashboard-routing.module';




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
    HomeModule,
    DashboardRoutingModule,


  
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
