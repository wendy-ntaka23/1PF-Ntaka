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

  private users: User[] = [];
    
  private users$ = new BehaviorSubject<User[]>([]);
 
  loadUsers(): void {
    this.users$.next(this.users)
  }
  getUsers() {
    return this.users$
  }

}
