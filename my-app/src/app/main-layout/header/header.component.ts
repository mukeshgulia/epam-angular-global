import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { User } from 'src/app/core/services/auth/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authSerivce: AuthService) { }

  public ngOnInit(): void {
  }

  public checkAuth(): boolean {
    return this.authSerivce.isAuthenticted();
  }

  public getUser(): string {
    this.authSerivce.getUserInfo()
    .subscribe((user: User) => {
      this.authSerivce.username = `${user.name.first} ${user.name.first}`;
    });
    return this.authSerivce.username;
  }

  public logout(): void {
    this.authSerivce.logout();
  }
}
