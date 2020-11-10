import { isDefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../auth/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public users: User[] = [];
  public loggedInUser: User;

  constructor(private router: Router) {
    this.init();
  }

  public login(email: string, token: string): void {
    const userPresent = this.users.findIndex(u => u.email === email && u.token === token);
    if (userPresent !== -1) {
      this.loggedInUser = this.users.find(u => u.email === email && u.token === token);
      console.log('Logged in successfully');
      this.router.navigateByUrl('/courses');
    }
  }

  public logout(): void {
    console.log(`Logging out ${this.loggedInUser.email}`);
    this.loggedInUser = undefined;
  }

  public isAuthenticted(): boolean {
    return isDefined(this.loggedInUser);
  }

  public getUserInfo(): string {
    return `${this.loggedInUser.firstName} ${this.loggedInUser.lastName}`;
  }

  private init(): void {
    this.users.push(new User(1, 'Mukesh', 'Gulia', 'mukesh_gulia@epam.com', 'password'));
    this.users.push(new User(1, 'Kiryl', 'Panov', 'kiryl_panov@epam.com', 'password'));
  }

}
