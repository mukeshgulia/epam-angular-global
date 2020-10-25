import { Component, OnInit } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Course } from 'src/app/models/course';

import { CourseComponent } from './course.component';

describe('CourseComponent', () => {

  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;
  const courseContent = new Course(1, 'hosted-course', new Date(), 100, 'hosted-course-description');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();

  });

  it('should receive course as input from host', () => {
    expect(hostFixture.nativeElement.querySelector('app-course').innerText).toContain(courseContent.title);
  });

  it('should remvove app-course component from host when delete is clicked', fakeAsync(() => {
    spyOn(hostComponent, 'onDeleteCourse');
    const s = hostFixture.debugElement.nativeElement.querySelector('#delete-button');
    s.click();
    tick();
    expect(hostComponent.onDeleteCourse).toHaveBeenCalled();
  }));

  @Component({
    selector: `app-host-component`,
    template: `<app-course *ngIf="course is not null" [course]=course (courseId)="onDeleteCourse($event)"></app-course>`
  })
  class TestHostComponent implements OnInit {
    public course: Course;

    public ngOnInit(): void {
      this.course = courseContent;
    }

    public onDeleteCourse(id: number): void {
      if( this.course.id === id ) {
        this.course = null;
      }
  }

  }

});

