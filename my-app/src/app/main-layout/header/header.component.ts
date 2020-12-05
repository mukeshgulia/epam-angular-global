import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user$: Observable<string>;

  constructor(private authSerivce: AuthService) { }

  public ngOnInit(): void {
    this.user$ = this.authSerivce.getUserInfo()
    .pipe(
        map(user => user ? user.name.first + ' ' + user.name.last : '')
    );
  }

  public checkAuth(): boolean {
    let isAuthenticted: boolean = false;

    this.authSerivce.isAuthenticted()
    .subscribe( isAuth => isAuthenticted = isAuth);

    return isAuthenticted;
  }

  public logout(): void {
    this.authSerivce.logout();
  }

}
