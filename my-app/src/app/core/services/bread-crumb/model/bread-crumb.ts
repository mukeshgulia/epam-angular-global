import { BreadcrumbsInterface } from './bread-crumb.interface';

export class Breadcrumb implements BreadcrumbsInterface {

  public name: string;
  public route?: string;

  constructor(name: string, route: string = null) {
    this.name = name;
    this.route = route;
  }
}
