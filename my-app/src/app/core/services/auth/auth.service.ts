import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { isDefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { AuthState, selectAuthState } from '../../store/auth/auth.state';
import { User } from '../auth/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:3004';

  // public username: string;
  // public token$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  private getAuthState: Observable<any>;

  constructor(private http: HttpClient, private store: Store<AuthState>) {
    this.getAuthState = this.store.select(selectAuthState);
  }

  public login(login: string, password: string): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${this.baseUrl}/auth/login`, {login, password});
    // .pipe(tap((response) => this.token$.next(response.token)));
  }

  public logout(): void {
    // console.log(`Logging out ${this.username}`);
    // this.username = null;
    // this.token$.next(undefined);
  }

  public isAuthenticted(): boolean {
    let isAuth : boolean = false;
    this.getAuthState.subscribe({
      next: state=> {
        isAuth = state.isAuthenticted
      }
    });

    return isAuth;
    }

    public getAuthToken(): string {
      let token : string = undefined;
      this.getAuthState.subscribe({
        next: state=> {
          token = state.token
        }
      });

      return token;
    }

  public getUserInfo(): Observable<User> {

    return this.getAuthState.pipe(
      filter((isAuthenticted) => !!isAuthenticted),
      switchMap((token) => this.http.post<User>(`${this.baseUrl}/auth/userinfo`, {token})));
  }

}
