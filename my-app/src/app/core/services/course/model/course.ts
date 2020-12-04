import { Author } from './author';
import { CourseInterface } from './course.interface';

export class Course implements CourseInterface {

  public id: number;
  public name: string;
  public date: string;
  public length: number;
  public description: string;
  public isTopRated: boolean;
  public authors: Author[];

  constructor(
    id: number, name: string, date: string, length: number,
    description: string, isTopRated: boolean = false, authors: Author[]) {
      this.id = id;
      this.name = name;
      this.date = date;
      this.length = length;
      this.description = description;
      this.isTopRated = isTopRated;
      this.authors = authors;
  }
}
