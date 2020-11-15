import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be empty', () => {
    expect(fixture.componentInstance.breadcrumbs.length).toBeGreaterThanOrEqual(1);
  });

  it('should contain courses as first item', () => {
    const firstItem = fixture.componentInstance.breadcrumbs[0];
    expect(firstItem.toLocaleLowerCase()).toEqual('courses');
  });

});
