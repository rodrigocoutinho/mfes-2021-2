
import Cachorro from  './Cachorro.js';
import Cavalo from  './Cavalo.js';
import Preguica from  './Preguica.js';
import Veterinario from './Veterinario.js';
import Zoologico from './Zoologico.js';


const animal1 = new Cachorro("TED", 2);
console.log(animal1);
console.log(animal1.apresentar());
animal1.emitirSom();
animal1.agir();
console.log('\n')

const animal2 = new Cavalo("Mike", 4);
console.log(animal2);
console.log(animal2.apresentar());
animal2.emitirSom();
animal2.agir();
console.log('\n');

const animal3 = new Preguica("Nina", 3);
console.log(animal3);
console.log(animal3.apresentar());
animal3.emitirSom();
animal3.agir();
console.log('\n');

console.log('Veterinário \n')
const verterinario = new Veterinario();
verterinario.examinar(animal1);
verterinario.examinar(animal2);
verterinario.examinar(animal3);
console.log('\n');

console.log('Zoologico...');


const animais = [animal1, animal2, animal3, animal1, animal2, animal3, animal1, animal2, animal3, animnal1];
const zoo = new Zoologico(animais);
zoo.exibir();