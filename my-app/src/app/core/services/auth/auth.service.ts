import { HttpClient } from '@angular/common/http';
import { isDefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../auth/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:3004';

  public username: string;
  public token: string;

  constructor(private http: HttpClient) {
  }

  public login(login: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, {login, password});
  }

  public logout(): void {
    console.log(`Logging out ${this.username}`);
    this.username = null;
    this.token = null;
  }

  public isAuthenticted(): boolean {
    return isDefined(this.token);
  }

  public getUserInfo(): Observable<User> {
    if (this.token) {
      return this.http.post<User>(`${this.baseUrl}/auth/userinfo`, {token: this.token});
    }
  }

}
