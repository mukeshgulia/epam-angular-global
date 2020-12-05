import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isAuthenticted: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.authService.isAuthenticted()
      .subscribe( isAuth => this.isAuthenticted = isAuth);

      return this.isAuthenticted;
      // if (this.authService.isAuthenticted()) {
      //   return true;
      // }

      this.router.navigateByUrl('/login');
      return false;
  }
}
