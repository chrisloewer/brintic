export class User {
  auth: boolean;
  token: string;
  username: string;

  constructor() {
    this.auth = false;
    this.token = null;
    this.username = null;
  }
}
