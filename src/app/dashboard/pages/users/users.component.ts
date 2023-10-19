import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './component/user-dialog/user-dialog.component';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
  export class UsersComponent {
    userName = '';

    users:User[]=[
      {
        id: 1,
        name: 'Wendy',
        lastName: 'Ntaka',
        curso: 'Diseño Grafico',
        clase:'Introduccion Diseño',
        email: 'wendysgrow23@gmail.com'
      },
      {
        id: 2,
        name: 'Rocio',
        lastName: 'Sanchez',
        curso:'Diseño ux/ui',
        clase:'DCU',
        email: 'rochu13@gmail.com'
      },
      {
        id: 3,
        name: 'Lucia',
        lastName: 'Lopez',
        curso:'Data',
        clase:'Data Analytics',
        email: 'LuLo@gmail.com'
      },
      {
        id: 4,
        name: 'Gonzalo',
        lastName: 'Santacaterina',
        curso:'Programacion',
        clase:'Introduccion HTML',
        email: 'santa_cate@gmail.com'
      },
      {
        id: 5,
        name: 'Zoe',
        lastName: 'De Abreu',
        curso: 'Producto',
        clase:'E-commerce',
        email: 'zooeedeabreu@gmail.com'
      },
      {
        id: 6,
        name: 'Leon',
        lastName: 'Ali',
        curso:'Programacion',
        clase:'Phyton',
        email: 'leonali17@gmail.com'
      },
      ]


    constructor( private matDialog: MatDialog) {}

    openUsersDialog(): void {
      this.matDialog.open(UserDialogComponent)
      . afterClosed()
      .subscribe({
      next:( v ) => {
        console.log('VALOR:' , v);


        if (!! v){

          this.users = [
            ...this.users,
            {
              ...v,
              id: new Date ().getTime(),
            }
          ]
        }
      },
      });
    }
    onEditUser (user: User): void{
      this.matDialog.open (UserDialogComponent , { 
        data:user
      }).afterClosed().subscribe ({
        next:(v) => {
          if (!!v){
            const arrayNuevo = [...this.users];

            const indiceToEdit = arrayNuevo.findIndex ((u) => u.id === user.id) ;

            arrayNuevo [indiceToEdit] = {...arrayNuevo[indiceToEdit], ...v};

            this.users = [...arrayNuevo];
          }
        },
      });
    }


    onDeleteUser(userId: number ): void {
      if (confirm('Estas seguro?')){
        this.users = this.users.filter ((u) => u.id !== userId);
      }
    }
}
