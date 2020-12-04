import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/core/services/course/model/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  public transform(courses: Course[]): Course[] {
    return courses.slice().sort( (a, b) =>  new Date(a.date).getTime() - new Date(b.date).getTime() );
  }

}
