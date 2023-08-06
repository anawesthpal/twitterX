import { User } from "./User";

export class Users {
  private _data: User[];

  constructor() {
    this._data = [];
  }

  public addUser(user: User) {
    if (!this._data.length) {
      this._data.push(user);
      console.log(`User @${user.show().username} foi adicionado ao database`);
      console.log("---------------------------------------------");
      console.log("");
      return;
    }

    const userFounded = this._data.find(
      (u) => u.show().username === user.show().username
    );

    if (userFounded) {
      console.log("Não foi possível cadastrar. Este username já existe");
      console.log("----------------------------------------------------");
      console.log("");
      return;
    }

    this._data.push(user);
    console.log(`User @${user.show().username} foi adicionado ao database`);
    console.log("---------------------------------------------");
    console.log("");
  }
}
