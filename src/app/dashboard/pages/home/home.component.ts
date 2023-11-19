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
      const users: User[] = [];
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
