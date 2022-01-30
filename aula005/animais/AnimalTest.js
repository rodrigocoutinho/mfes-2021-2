
import Cachorro from  './Cachorro.js';
import Cavalo from  './Cavalo.js';
import Preguica from  './Preguica.js';


const animal1 = new Cachorro("TED", 2);
console.log(animal1);
console.log(animal1.apresentar());
animal1.emitirSom();
animal1.agir();

const animal2 = new Cavalo("Mike", 4);
console.log(animal2);
console.log(animal2.apresentar());
animal2.emitirSom();
animal2.agir();

const animal3 = new Preguica("Nina", 3);
console.log(animal3);
console.log(animal3.apresentar());
animal3.emitirSom();
animal3.agir();
