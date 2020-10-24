import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: string[];

  constructor() { }

  // Task 2: static breadcrumbs
  public ngOnInit(): void {
    this.breadcrumbs = ['Courses'];
  }

}
