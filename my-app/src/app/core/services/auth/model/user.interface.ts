export interface UserInterface {
  id: number;
  token: string;
  name: {
      first: string;
      last: string;
  };
  login: string;
  password: string;
}
