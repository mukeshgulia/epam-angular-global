import { Injectable } from '@angular/core';

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

  public getUserInfo()
}
