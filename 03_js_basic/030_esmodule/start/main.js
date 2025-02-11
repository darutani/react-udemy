import functionB, { hello, User } from "./module.js";

hello();

const user = new User('Taro');
user.hello();

functionB();
