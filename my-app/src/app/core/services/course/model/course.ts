import { Author } from './author';
import { CourseInterface } from './course.interface';

export class Course implements CourseInterface {

  public id: number;
  public name: string;
  public date: Date;
  public length: number;
  public description: string;
  public topRated: boolean;
  public authors: Author[];

  constructor(
    id: number, name: string, date: Date, length: number,
    description: string, topRated: boolean = false, authors: Author[]) {
      this.id = id;
      this.name = name;
      this.date = date;
      this.length = length;
      this.description = description;
      this.topRated = topRated;
      this.authors = authors;
  }
}
