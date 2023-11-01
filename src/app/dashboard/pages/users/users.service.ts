import { Inject, Injectable } from '@angular/core';
import { User } from './models';
import { inject } from '@angular/core/testing';
import { ApiUrl } from 'src/app/config/url.token';
import { ApiUrlConfig } from 'src/app/config/url.token';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    @Inject(ApiUrl)
    private url: ApiUrlConfig
  ) {
    console.log('LA URL INYECTADA ES : ', url)
  }

  private users: User[] = [


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
    
  private users$ = new BehaviorSubject<User[]>([]);
 
  loadUsers(): void {
    this.users$.next(this.users)
  }
  getUsers() {
    return this.users$
  }

}
