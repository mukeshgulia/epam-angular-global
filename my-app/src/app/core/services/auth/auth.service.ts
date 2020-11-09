import { isDefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { User } from '../auth/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public users: User[] = [];
  public loggedInUser: User;
  constructor() {
    this.init();
  }

  public login(user: User): void {
    const userPresent = this.users.findIndex(u => u.email === user.email && u.token === user.token);
    if (userPresent !== -1) {
      this.loggedInUser = this.users.find(u => u.email === user.email && u.token === user.token);
    }
  }

  public logout(): void {
    console.log(`Logging out ${this.loggedInUser.email}`);
    this.loggedInUser = null;
  }

  public isAuthenticted(): boolean {
    return isDefined(this.loggedInUser);
  }

  public getUserInfo(): User {
    return this.loggedInUser;
  }

  private init(): void {
    this.users.push(new User(1, 'Mukesh', 'Gulia', 'mukesh_gulia@epam.com', 'password'));
    this.users.push(new User(1, 'Kiryl', 'Panov', 'kiryl_panov@epam.com', 'password'));
  }

}
