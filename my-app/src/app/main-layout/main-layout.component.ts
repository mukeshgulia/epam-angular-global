import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  public ngOnInit(): void {
  }

  public checkAuth(): boolean {
    return this.authservice.isAuthenticted();
  }

}
