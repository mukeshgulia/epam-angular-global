import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Breadcrumb } from '../core/services/bread-crumb/model/bread-crumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {

  @Input() public breadcrumbs: Breadcrumb[];

  constructor() { }

}
