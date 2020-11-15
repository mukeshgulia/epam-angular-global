import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AddCourseComponent } from '../add-course/add-course.component';
import { SearchComponent } from '../search/search.component';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { SharedModule } from '../shared/shared.module';

import { CoursesPageComponent } from './courses-page.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [
        CoursesPageComponent,
        SearchComponent,
        AddCourseComponent,
        DurationPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain search component', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-search')).toBeDefined();
  });

  it('should contain add-course component', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-add-course')).toBeDefined();
  });


  it('should list course components', () => {

    const compiled = fixture.nativeElement;
    fixture.whenStable()
    .then(() => {
      expect(compiled.querySelector('app-course')).toBeDefined();
    })
    .then(() => {
      const courses = fixture.debugElement.queryAll(By.css('app-course'));
      expect(courses.length).toBeGreaterThanOrEqual(3);
    });
    expect(component).toBeTruthy();
  });
});
