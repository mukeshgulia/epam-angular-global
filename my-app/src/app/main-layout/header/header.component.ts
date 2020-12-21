import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState, selectAuthState } from 'src/app/core/store/auth/auth.state';
import { logout } from 'src/app/core/store/auth/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user$: Observable<string>;

  constructor(private authStore: Store<AuthState>) { }

  public ngOnInit(): void {

    this.user$ = this.authStore.select(selectAuthState)
    .pipe(
        map(state => `${state.authState.userinfo.name.first} ${state.authState.userinfo.name.last}`)
    );
  }

  public checkAuth(): boolean {

    let isAuthenticted: boolean = false;

    this.authStore.select(selectAuthState)
    .subscribe( state => isAuthenticted = state.authState.isAuthenticated);

    return isAuthenticted;
  }

  public logout(): void {
    this.authStore.dispatch(logout());
    // this.authSerivce.logout();
  }

}
