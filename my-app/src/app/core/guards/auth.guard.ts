import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { AuthState, selectAuthState } from '../store/auth/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,  private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isAuthenticted();
    // this.isAuthenticted = this.authService.isAuthenticted();
    // console.log(`guard: ${this.isAuthenticted }`)
    // if (!this.isAuthenticted) {
    //   this.router.navigateByUrl('/login');
    // }
    // return this.isAuthenticted;

    // return this.authService.isAuthenticted().pipe(
    //     tap((isAuthenticated) => {
    //       if (!isAuthenticated) { this.router.navigateByUrl('/login'); }
    //     }));

      // this.authService.isAuthenticted()
      // .subscribe( isAuth => this.isAuthenticted = isAuth);

      // return this.isAuthenticted;
      // if (this.authService.isAuthenticted()) {
      //   return true;
      // }

      // this.router.navigateByUrl('/login');
      // return false;
  }
}
