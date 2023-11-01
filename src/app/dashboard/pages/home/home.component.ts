import { Component, OnDestroy } from '@angular/core';
import { User } from '../users/models';
import { Observable , Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  loading = false;

clockSuscription: Subscription;

  constructor() {
    this.getUsers();

    this.clockSuscription=this.getClock().subscribe({

      next: (v) => {
        console.log(v);
      },
      error: (err) => {
        alert('Ocurrio un error!');
      },
      complete: () => {
        console.log('FINALIZO EL CONTADOR');
      },
    });
  }
  ngOnDestroy(): void {
    console.log('SE DESTRUYO EL HOME');

    this.clockSuscription.unsubscribe();
    }

  getClock(): Observable<number> {

    return new Observable((suscriber) => {
      let counter = 0;

      setInterval(() => {
        counter++;

        suscriber.next(counter);

        if (counter === 10) {
          suscriber.complete();
        }
      }, 1000);
    });

  }

  async getUsers(): Promise<void> {
    this.loading = true;
    const getUsersPromise = new Promise((resolve, reject) => {
      const users: User[] = [

        {
          id: 1,
          name: 'Wendy',
          lastName: 'Ntaka',
          curso: 'Diseño Grafico',
          clase: 'Introduccion Diseño',
          email: 'wendysgrow23@gmail.com'
        },
        {
          id: 2,
          name: 'Rocio',
          lastName: 'Sanchez',
          curso: 'Diseño ux/ui',
          clase: 'DCU',
          email: 'rochu13@gmail.com'
        },
        {
          id: 3,
          name: 'Lucia',
          lastName: 'Lopez',
          curso: 'Data',
          clase: 'Data Analytics',
          email: 'LuLo@gmail.com'
        },
        {
          id: 4,
          name: 'Gonzalo',
          lastName: 'Santacaterina',
          curso: 'Programacion',
          clase: 'Introduccion HTML',
          email: 'santa_cate@gmail.com'
        },
        {
          id: 5,
          name: 'Zoe',
          lastName: 'De Abreu',
          curso: 'Producto',
          clase: 'E-commerce',
          email: 'zooeedeabreu@gmail.com'
        },
        {
          id: 6,
          name: 'Leon',
          lastName: 'Ali',
          curso: 'Programacion',
          clase: 'Phyton',
          email: 'leonali17@gmail.com'
        },
      ];
      setTimeout(() => {
        resolve(users);
      }, 5000);

    });

    await getUsersPromise

      .then((result) => console.log(result))
      .catch((err) => {
        alert('Ocurrio un error'), console.log(err);
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
