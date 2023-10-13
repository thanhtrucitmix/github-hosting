import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { Observable, tap } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/users';
  }

  public findAll(): Observable<User[]> {
    console.log('Making GET request to', this.usersUrl);
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(data => console.log('My data is', data),
      error => console.error('Error occurred:', error)));
}
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}