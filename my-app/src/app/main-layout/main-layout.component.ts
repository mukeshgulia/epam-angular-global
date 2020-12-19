import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../core/services/loading/loading.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(public loadingService: LoadingService) { }

  public ngOnInit(): void {
  }
}
