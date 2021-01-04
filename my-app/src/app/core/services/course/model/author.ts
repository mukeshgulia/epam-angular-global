import { AuthorInterface } from './author.interface';

export class Author implements AuthorInterface {
    public id: number;
    public name: string;
    public lastName: string;

    constructor(id: number, name: string, lastName: string) {
      this.id = id;
      this.name = name;
      this.lastName = lastName;
    }
}
