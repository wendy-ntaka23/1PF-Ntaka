import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDialogComponent } from './component/user-dialog/user-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersService } from './users.service';
import { ApiUrl } from 'src/app/config/url.token';



@NgModule({
  declarations: [
    UsersComponent,
    UserDialogComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UsersService,
    {
      provide: UsersService,
      useClass: UsersService,
    },
    {
      provide : ApiUrl,
      useValue:{
        url: 'http://localhost:4200/users',
      },
    }
   
  ],
})
export class UsersModule { }
