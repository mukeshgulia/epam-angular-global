import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(): void {
    console.log('asdsa');
  }
  public logout(): void {
    console.log('asdsa');
  }

  public isAuthenticted(): boolean {
    return false;
  }

  public getUserInfo(): User {
    return null;
  }
}
