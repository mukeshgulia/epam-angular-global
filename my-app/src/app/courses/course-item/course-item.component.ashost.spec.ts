import { Component, OnInit } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Course } from 'src/app/core/services/course/model/course';
import { SharedModule } from 'src/app/shared/shared.module';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {

  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;
  const courseContent = new Course(1, 'hosted-course', new Date(), 100, 'hosted-course-description', false, null);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ],
      imports: [RouterTestingModule, SharedModule]
    })
    .compileComponents();
  });

  beforeEach(() => {

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();

  });

  it('should receive course as input from host', () => {
    expect(hostFixture.nativeElement.querySelector('app-course-item').innerText).toContain(courseContent.title);
    // hostFixture.debugElement.query(By.css('app-course-item'))
  });

  it('should remvove app-course-item component from host when delete is clicked', fakeAsync(() => {
    spyOn(hostComponent, 'onDeleteCourse');
    const deleteButton = hostFixture.debugElement.nativeElement.querySelector('#delete-button');
    deleteButton.click();
    // tick();
    expect(hostComponent.onDeleteCourse).toHaveBeenCalled();
  }));

  @Component({
    selector: `app-host-component`,
    template: `<app-course-item
      *ngIf="course is not null"
      [course]=course
      (courseId)="onDeleteCourse($event)"></app-course-item>`
  })
  class TestHostComponent implements OnInit {
    public course: Course;

    public ngOnInit(): void {
      this.course = courseContent;
    }

    public onDeleteCourse(id: number): void {
      if ( this.course.id === id ) {
        this.course = null;
      }
    }

  }

});

