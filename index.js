const say = what => console.log(what);
const say2 = what => console.log(what);

const sayHello = () => say(`Hello!`);
const sayHello2 = () => say2(`Hello!`);

const bye = () => say('Bye');

sayHello();
bye();
sayHello2();

