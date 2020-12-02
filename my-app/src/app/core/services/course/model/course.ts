import { Author } from './author';
import { CourseInterface } from './course.interface';

export class Course implements CourseInterface {

  public id: number;
  public title: string;
  public creationDate: Date;
  public duration: number;
  public description: string;
  public topRated: boolean;
  public authors: Author[];

  constructor(
    id: number, title: string, creationDate: Date, duration: number,
    description: string, topRated: boolean = false, authors: Author[]) {
      this.id = id;
      this.title = title;
      this.creationDate = creationDate;
      this.duration = duration;
      this.description = description;
      this.topRated = topRated;
      this.authors = authors;
  }
}
