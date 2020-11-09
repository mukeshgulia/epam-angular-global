import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/core/services/course/model/course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(courses: Course[], searchString: string): Course[] {
    const regex = new RegExp(searchString, 'g');
    return courses.slice().filter(course => regex.test(course.title));
}
}
