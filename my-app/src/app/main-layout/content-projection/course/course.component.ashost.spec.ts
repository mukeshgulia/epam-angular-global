import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Course } from 'src/app/models/course';

import { CourseComponent } from './course.component';

describe('CourseComponent', () => {

  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  const courseContent = new Course(1, 'hosted-course', new Date(), 100, 'hosted-course-description');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();

  });

  it('should receive course as input from host', () => {
    expect(testHostFixture.nativeElement.querySelector('app-course').innerText).toContain(courseContent.title);
  });

  @Component({
    selector: `app-host-component`,
    template: `<app-course [course]=course></app-course>`
  })
  class TestHostComponent implements OnInit {
    public course: Course;

    public ngOnInit(): void {
      this.course = courseContent;
    }
  }

});

