import { HttpClient } from '@angular/common/http';
import { isDefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../auth/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:3004';

  public username: string;
  public token: string;

  constructor(private router: Router,  private http: HttpClient) {
  }

  public login(login: string, password: string): void {

    this.http.post(`${this.baseUrl}/auth/login`, {login, password})
    .subscribe((res: {token: string}) => {
      console.log(`token: ${res.token}`);
      this.token  = res.token;
      this.router.navigateByUrl('/courses');
    });
  }

  public logout(): void {
    console.log(`Logging out ${this.username}`);
    this.username = null;
    this.token = null;
  }

  public isAuthenticted(): boolean {
    return isDefined(this.token);
  }

  public getUserInfo(): string {
    if (this.token) {
      this.http.post<User>(`${this.baseUrl}/auth/userinfo`, {token: this.token})
      .subscribe((user: User) => {
        this.username = `${user.name.first} ${user.name.first}`;
      });
    }
    return this.username;
  }

}
