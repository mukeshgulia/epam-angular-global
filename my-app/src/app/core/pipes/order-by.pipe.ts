import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  public transform(courses: Course[]): unknown {
    return courses.slice().sort( (a, b) =>  a.creationDate.getTime() - b.creationDate.getTime() );
  }

}
