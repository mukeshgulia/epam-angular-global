import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

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
    return this.authSerivce.getUserInfo();
  }

  public logout(): void {
    this.authSerivce.logout();
  }
}
