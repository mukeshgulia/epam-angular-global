import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
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

  public isAuth$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private authStore: Store<AuthState>) { }

  public ngOnInit(): void {

    this.user$ = this.authStore.select(selectAuthState)
    .pipe(
        map(state => `${state.authState.userinfo.name.first} ${state.authState.userinfo.name.last}`)
    );
  }

  // public checkAuth(): boolean {


  //   this.isAuth$ = this.authStore.select(selectAuthState)
  //   .pipe(state => isAuthenticted = state.authState.isAuthenticated);

  //   return isAuthenticted;
  // }

  public logout(): void {
    this.authStore.dispatch(logout());
    // this.authSerivce.logout();
  }

}
