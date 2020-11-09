import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    component.course =
    {
      id: 1,
      title: 'Course title',
      creationDate: new Date(),
      duration: 100, description: 'Course description',
      topRated: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call edit when click edit button', () => {
    spyOn(component, 'edit');
    const edit = fixture.debugElement.nativeElement.querySelector('#edit-button');
    edit.click();
    expect(component.edit).toHaveBeenCalled();
  });


  it('should emit course id on delete', () => {

    spyOn(component.courseId, 'emit');
    const button = fixture.nativeElement.querySelector('#delete-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.courseId.emit).toHaveBeenCalledWith(1);
 });

});
