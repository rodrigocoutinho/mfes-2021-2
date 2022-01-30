import Animal from "./Animal.js";

export default class Cachorro extends Animal{
    emitirSom(){
        console.log('Latindo...')
    }
    
    agir(){
        console.log('Correndo...')
    }
}