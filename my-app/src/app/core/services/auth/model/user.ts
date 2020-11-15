import { UserInterface } from './user.interface';

export class User implements UserInterface {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public token: string;

  constructor(id: number, firstName: string, lastName: string, email: string, token: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.token = token;
  }
}
