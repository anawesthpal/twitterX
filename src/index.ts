import { Like } from "./classes/Like";
import { Tweet } from "./classes/Tweet";
import { User } from "./classes/User";
import { listaUsuario } from "./database/Users";

//criação de usuários
const user1 = new User(
  "Ana Westhpal",
  "anawesthpal",
  "anawesthpal@gmail.com",
  "784951623"
);
const user2 = new User(
  "Fulanis de Fulana",
  "fulaniiisFu",
  "fulana_fulanis@teste.com;br",
  "654852"
);

const user3 = new User(
  "Judas Messias",
  "Messias666",
  "fale_com_judas_messias@gmail.com",
  "portal6660"
);
const user4 = new User(
  "Ana Westhpal",
  "anawesthpal",
  "anawesthpal@gmail.com",
  "784951623"
);

console.log("");

// Cadastrar usuário ao banco de dados
console.log("----- Criando usuários no banco de dados -----");
console.log("");

listaUsuario.addUser(user1);
listaUsuario.addUser(user2);
listaUsuario.addUser(user3);
listaUsuario.addUser(user4);

// Criação de tweets Normal
//console.log("----- Criando tweets type 'Normal' -----");
const tweet1 = new Tweet(
  "Sofreeendo com o trabalho typescrit!!!!",
  "Normal",
  user1
);
const tweet2 = new Tweet(
  "Hellou tuiiireeer, cheguei! Mas nem sei como isso funciona...",
  "Normal",
  user1
);
const tweet3 = new Tweet("Dia de maldade!", "Normal", user1);

// Criação de tweets reply
//console.log("----- Criando tweets type 'Reply' -----");
const reply1 = new Tweet("Precisa de ajudar?", "Reply", user2);
const reply2 = new Tweet("É facinho!", "Reply", user2);
const reply3 = new Tweet("Que perigo! hahaha", "Reply", user3);

user1.sendTweet(tweet1);
user1.sendTweet(tweet2);
user2.sendTweet(tweet2);

// Curtidas em tweets
console.log("----- Curtidas -----");
console.log("");
const like1 = new Like(user1);
const like2 = new Like(user2);
const like3 = new Like(user3);

tweet1.like(like2);
tweet1.like(like3);
tweet1.like(like3);
tweet3.like(like1);

// Seguir outros usuários
console.log("----- Following -----");
console.log("");
user2.follow(user1);
user2.follow(user3);
user3.follow(user1);

// Dar resposta em um tweet
console.log("----- Responder tweet -----");
console.log("");
tweet1.reply(reply1);
tweet2.reply(reply2);
tweet1.reply(reply3);

// Mostrar respostas de um tweet
console.log("----- Mostrar tweet -----");
console.log("");
tweet1.showReplies();

// Mostrar feed de um usuário
console.log("----- Mostrar feed -----");
console.log("");
user2.showFeed();
