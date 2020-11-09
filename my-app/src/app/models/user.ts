import { UserInterface } from './user.interface';

export class User implements UserInterface {
  public id: number;
  public firstName: string;
  public lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
