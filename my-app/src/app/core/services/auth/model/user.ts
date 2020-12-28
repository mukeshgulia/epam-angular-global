import { UserInterface } from './user.interface';

export class User implements UserInterface {
  public id: number;
  public token: string;
  public name: {
      first: string;
      last: string;
  };
  public login: string;
  public password: string;

  constructor(id: number, token: string, name: {first: string, last: string}, login: string, password: string) {
    this.id = id;
    this.token = token;
    this.name = name;
    this.login = login;
    this.password = password;
  }
}

