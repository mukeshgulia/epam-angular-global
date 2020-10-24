import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Course } from 'src/app/models/course';

import { CourseComponent } from './course.component';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = new Course(1, 'Course title', new Date(), 100, 'Course description');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call edit when click edit button', fakeAsync(() => {
    spyOn(component, 'edit');
    const edit = fixture.debugElement.nativeElement.querySelector('#edit-button');
    edit.click();
    tick();
    expect(component.edit).toHaveBeenCalled();
  }));


  it('should emit course id on delete', () => {

    spyOn(component.courseId, 'emit');
    const button = fixture.nativeElement.querySelector('#delete-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.courseId.emit).toHaveBeenCalledWith(1);
 });

});
