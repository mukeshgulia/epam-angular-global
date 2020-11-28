import { Injectable } from '@angular/core';
import { Course } from 'src/app/core/services/course/model/course';
import { DateHelper } from 'src/app/shared/utils/date-helper';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: Course[] = [];

  constructor(private dateHelper: DateHelper) {
    this.init();
  }

  public addCourse(course: Course): void {
    this.courses.push(course);
  }

  public getList(): Course[] {
    return this.courses.slice();
  }

  public getItem(id: number): Course {
    return this.courses.slice().find(course => course.id === id);
  }

  public updateCourse(course: Course): void {
    const index = this.courses.findIndex((crs) => crs.id === course.id);

    if (index === -1) {
        console.log('Item not found. Nothing to update');
    } else {
        this.courses[index] = course;
    }
  }

  public removeItem(id: number): void {
    this.courses.splice(id - 1, 1);
  }

  private init(): void {
    const today: Date = new Date();
    const desc: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus quam neque, sit amet tempus ipsum tempor nec. Maecenas tincidunt, lectus non faucibus dapibus, metus velit ultricies ipsum, eget tincidunt est massa vitae diam. Aliquam pellentesque neque ipsum, vitae dignissim sem lobortis non.';
    this.addCourse(new Course(1, 'course-by-mukesh', today, 120, desc));
    this.addCourse(new Course(2, 'course-by-mentor', this.dateHelper.subtractDays(today, 1), 119, desc, true));
    this.addCourse(new Course(3, 'course-by-mentors', this.dateHelper.addDays(today, 1), 122, desc));
  }
}
