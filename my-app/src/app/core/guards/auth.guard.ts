import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { AuthState, selectAuthState } from '../store/auth/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authStore: Store<AuthState>,  private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree > | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authStore.select(selectAuthState)
      .pipe(
        map(token => !!token),
        tap(token => {
          if (!token) {
            this.router.navigateByUrl('/login');
          }
        })
      );


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
