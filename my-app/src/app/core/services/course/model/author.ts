import { AuthorInterface } from './author.interface';

export class Author implements AuthorInterface {
    public id: number;
    public firstName: string;
    public lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
    }
}
