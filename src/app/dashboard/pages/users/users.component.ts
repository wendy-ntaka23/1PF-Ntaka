import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './component/user-dialog/user-dialog.component';
import { User } from './models';
import { UsersService } from './users.service';
import { Observable, of, map } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
  export class UsersComponent {
    userName = '';

    users: Observable<User[]>;

    constructor(
      private matDialog: MatDialog,
      private usersService:  UsersService,
      ) {

of ('Wendy Ntaka', 'Rocio Sanchez', 'Lucia Lopez', 'Gonzalo Santacaterina', 'Zoe De Abreu', 'Leon Ali')
.pipe( map((valor) => console.log('Alumnos', valor))
)
.subscribe({
  next:(v) => 
console.log(v)})


      this.users = this.usersService.getUsers()
      this.usersService.loadUsers() 
      //this.usersService.getUsers().subscribe({
        //  next:(v) => {
          //  this.users = v
          }
        //});
     // }

     //openUsersDialog(): void {
      //this.matDialog.open(UserDialogComponent)
      //. afterClosed()
      //.subscribe({
    //  next:( v ) => {
  //      console.log('VALOR:' , v);


   //     if (!! v){

    //      this.users = [
   //         ...this.users,
   //         {
   //           ...v,
   //           id: new Date ().getTime(),
   //         }
   //       ]
   //     }
   //   },
   //   });
   // }
  //  onEditUser (user: User): void{
   //   this.matDialog.open (UserDialogComponent , { 
   //     data:user
  //    }).afterClosed().subscribe ({
  //      next:(v) => {
  //        if (!!v){
   //         const arrayNuevo = [...this.users];

   //         const indiceToEdit = arrayNuevo.findIndex ((u) => u.id === user.id) ;

   //         arrayNuevo [indiceToEdit] = {...arrayNuevo[indiceToEdit], ...v};

   //         this.users = [...arrayNuevo];
   //       }
   //     },
   //   });
   // }


   // onDeleteUser(userId: number ): void {
   //   if (confirm('Estas seguro?')){
   //     this.users = this.users.filter ((u) => u.id !== userId);
   //   }
   // }
}
