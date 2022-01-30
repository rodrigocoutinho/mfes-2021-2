import Animal from "./Animal.js";

export default class Cavalo extends Animal{
    emitirSom(){
        console.log('Relincho')
    }
    
    agir(){
        console.log('Correndo...')
    }
}