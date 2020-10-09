const say = what => console.log(what);

const sayHello = () => say(`Hello!`);
const sayHello2 = () => say(`Hello!`);

const bye = () => say('Bye');
sayHello();

bye();
