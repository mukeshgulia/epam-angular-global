import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../auth/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:3004';

  // public username: string;
  private userLoggedIn = new Subject<boolean>();
  public token$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  constructor(private http: HttpClient ) {
    this.userLoggedIn.next(false);
  }

  public login(login: string, password: string): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${this.baseUrl}/auth/login`, {login, password})
    .pipe(
      tap((response) => this.token$.next(response.token)),
      map((response) => response)
    );
  }

  // public login(login: string, password: string): Observable<{token: string}> {
  //   return this.http.post<{token: string}>(`${this.baseUrl}/auth/login`, {login, password})
  //   .pipe(tap((response) => this.token$.next(response.token)));
  // }

  public logout(): void {
    // console.log(`Logging out ${this.username}`);
    // this.username = null;
     this.token$.next(undefined);
  }

  public isAuthenticted(): boolean {
    console.log(`service isAuth: ${this.getAuthToken() ? true : false}`);
    return this.getAuthToken() ? true : false;
  }

  public observeAuth(): Observable<boolean> {
    return this.token$.asObservable().pipe(map((token) => !!token));
  }

  public getAuthToken(): string {
    console.log(`service token: ${localStorage.getItem('token')}`);
    return localStorage.getItem('token');
  }

  public getUserInfo(): Observable<User> {
    if (this.isAuthenticted()) {
      console.log(`service getUserInfo: ${this.isAuthenticted()}`);
      return this.http.post<User>(`${this.baseUrl}/auth/userinfo`, this.getAuthToken());
    } else {

      return of(new User(0, '', {first: '', last: ''}, '', '' )); // empty user
    }
    // return null;
    // return this.getAuthState.pipe(
    // filter((isAuthenticted) => !!isAuthenticted),
    // switchMap((token) => this.http.post<User>(`${this.baseUrl}/auth/userinfo`, {token})));
  }

}
