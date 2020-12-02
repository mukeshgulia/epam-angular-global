import { Author } from './author';

export interface CourseInterface {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;
  authors: Author[];

}
