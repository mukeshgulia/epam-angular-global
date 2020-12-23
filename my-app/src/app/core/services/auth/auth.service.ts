import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { dummyUser } from '../../constants';
import { User } from '../auth/model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://localhost:3004';

  constructor(private http: HttpClient) {}

  public login(login: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/auth/login`, {
      login,
      password,
    });
  }

  public getUserInfo(token: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/userinfo`, { token });
  }
}
