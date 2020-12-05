import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';
import { LoadingService } from '../core/services/loading/loading.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private authservice: AuthService, public loadingService: LoadingService) { }

  public ngOnInit(): void {
  }
}
