import { Base } from "./Base";
import { Like } from "./Like";
import { User } from "./User";

type TypeTweet = "Normal" | "Reply";

export class Tweet extends Base {
  private _replies: Tweet[];
  private _likes: Like[];

  constructor(
    private _content: string,
    private _type: TypeTweet,
    private _user: User
  ) {
    super();
    this._replies = [];
    this._likes = [];
  }

  public reply(tweet: Tweet) {
    if (this._user.id === tweet._user.id) {
      console.log("Não é possível dar reply em um tweet criado por si mesmo");
      console.log("-----------------------------------------------------");
      console.log("");
      return;
    }

    if (tweet.show().type === "Normal") {
      console.log(
        "Não foi possível responder. Tweet precisa ser do tipo 'reply'"
      );
      console.log("-----------------------------------------------------");
      console.log("");
      return;
    }

    this._replies.push(tweet);
    console.log(
      `@${tweet.show().user.show().username} deu reply em um tweet de @${
        this._user.show().username
      }!`
    );
    console.log("-----------------------------------------------------");
    console.log("");
  }

  public like(like: Like) {
    if (!this._likes.length) {
      this._likes.unshift(like);
      return;
    }

    const userFounded = this._likes.find(
      (l) => l.show().user.id === like.show().user.id
    );

    if (userFounded) {
      console.log("Este usuário já curtiu esse tweet");
      console.log("---------------------------------------------");
      console.log("");
      return;
    }

    this._likes.push(like);
    console.log(
      `@${like.show().user.show().username} curtiu o tweet @${
        this._user.show().username
      }!`
    );
    console.log("----------------------------------------------");
    console.log("");
  }

  public show() {
    return {
      content: this._content,
      likes: this._likes,
      replies: this._replies,
      type: this._type,
      user: this._user,
    };
  }

  public showReplies() {
    if (!this._likes.length) {
      console.log(
        `@${this.show().user.show().username}: ${this._content} [0 curtidas]`
      );

      if (this._replies.length) {
        this._replies.forEach((reply) =>
          console.log(`   > ${reply._user.show().username}: ${reply._content}`)
        );
      }

      console.log("-----------------------------------------------------");
      console.log("");
      return;
    }

    if (this._likes.length === 1) {
      console.log(
        `@${this._user.show().username}: ${this._content} [@${
          this._likes[0].show().user.show().username
        } curtiu!]`
      );

      if (this._replies.length) {
        this._replies.forEach((reply) =>
          console.log(`   > ${reply._user.show().username}: ${reply._content}`)
        );
      }

      return;
    }

    console.log(
      `@${this._user.show().username}: ${this._content} \n[@${
        this._likes[0].show().user.show().username
      } e outros ${this._likes.length - 1} e outros!]`
    );

    if (this._replies.length) {
      this._replies.forEach((reply) =>
        console.log(`   > ${reply._user.show().username}: ${reply._content}`)
      );
    }
    console.log("-----------------------------------------------------");
    console.log("");
  }
}
