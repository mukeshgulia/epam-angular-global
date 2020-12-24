import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, userInfo } from 'src/app/core/store/app.state';
import { logout } from 'src/app/core/store/auth/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user: string;
  public user$: Observable<string>;

  public userSubscription: Subscription;

  constructor(private authStore: Store<AppState>) {}

  public ngOnInit(): void {
    this.user$ = this.authStore.select(userInfo).pipe(
      filter((user) => !!user),
      map((user) => `${user.name.first} ${user.name.last}`)
    );

    // this.userSubscription = this.authStore.select(state => state.authState)
    // .subscribe(state => {
    //   console.log(`state ${state}`);
    //   this.user = `${state.userinfo.name.first} ${state.userinfo.name.last}`;
    // });
  }

  public ngOnDestroy(): void {
    //    this.userSubscription.unsubscribe();
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
