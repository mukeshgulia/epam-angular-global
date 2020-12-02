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
}
