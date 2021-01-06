import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, userInfo } from 'src/app/core/store/app.state';
import { logout } from 'src/app/core/store/auth/actions/auth.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public languages = new Map([
    ['English', 'en'],
    ['Russian', 'ru']
  ]);

  public user: string;
  public user$: Observable<string>;

  public userSubscription: Subscription;
  public languagesEntries: [string, string][];

  constructor(private authStore: Store<AppState>, private translate: TranslateService) {
    this.languagesEntries = Array.from(this.languages.entries());
    translate.setDefaultLang('en');
    translate.addLangs(Array.from(this.languages.values()));
    translate.use(this.languages.get('English'));
  }

  public ngOnInit(): void {
    // this.languagesEntries = this.languages.entries();
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

  public onLanguageSelect(language: string): void {
    this.translate.use(language);
  }
}
