import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/core/store/auth/auth.state';
import { logout } from 'src/app/core/store/auth/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user$: Observable<string>;

  constructor(private authSerivce: AuthService, private store: Store<AuthState>) { }

  public ngOnInit(): void {
    this.user$ = this.authSerivce.getUserInfo()
    .pipe(
        map(user => user ? user.name.first + ' ' + user.name.last : '')
    );
  }

  public checkAuth(): boolean {

//    return this.authSerivce.isAuthenticted();
    let isAuthenticted: boolean = false;

    this.authSerivce.observeAuth()
    .subscribe( isAuth => isAuthenticted = isAuth);

    return isAuthenticted;
  }

  public logout(): void {
    this.store.dispatch(logout());
    // this.authSerivce.logout();
  }

}
