import { Author } from './author';

export interface CourseInterface {
  id: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  topRated: boolean;
  authors: Author[];

}
