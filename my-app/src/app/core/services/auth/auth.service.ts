import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { isDefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { User } from '../auth/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:3004';

  public username: string;
  public token$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  constructor(private http: HttpClient) {}

  public login(login: string, password: string): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${this.baseUrl}/auth/login`, {login, password})
    .pipe(tap((response) => this.token$.next(response.token)));
  }

  public logout(): void {
    console.log(`Logging out ${this.username}`);
    this.username = null;
    this.token$.next(undefined);
  }

  public isAuthenticted(): Observable<boolean> {
     return this.token$.asObservable().pipe(map((token) => !!token));
    }

  public getUserInfo(): Observable<User> {

    return this.token$.asObservable().pipe(
      filter((token) => !!token),
      switchMap((token) => this.http.post<User>(`${this.baseUrl}/auth/userinfo`, {token})));
  }

}
