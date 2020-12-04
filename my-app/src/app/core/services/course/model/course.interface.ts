import { Author } from './author';

export interface CourseInterface {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: Author[];

}
