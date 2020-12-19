import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,  private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isAuthenticted: boolean =  this.authService.isAuthenticted();
    console.log(`guard: ${isAuthenticted }`);
    if (!isAuthenticted) {
      this.router.navigateByUrl('/login');
    }
    return isAuthenticted;

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
