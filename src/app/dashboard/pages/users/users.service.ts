import { Inject, Injectable } from '@angular/core';
import { User } from './models';
import { inject } from '@angular/core/testing';
import { ApiUrl } from 'src/app/config/url.token';
import { ApiUrlConfig } from 'src/app/config/url.token';
import { BehaviorSubject, Observable, Subject, concat, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.local';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(

    private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.baseUrl}/users`);
  }

  createUser(payload: User): Observable<User[]> {
    return this.httpClient.post<User>(`${environment.baseUrl}/users`, payload).pipe(concatMap(() => this.getUsers()));
  }

  updateUser(userId: number, payload: User): Observable<User[]> {
    return this.httpClient.put<User>(`${environment.baseUrl}/users/${userId}`, payload).pipe(concatMap(() => this.getUsers())
    );
  }
}