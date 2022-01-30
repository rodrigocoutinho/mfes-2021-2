import Animal from "./Animal.js";

export default class Preguica extends Animal{
    emitirSom(){
        console.log('Som da preguiça')
    }
    
    agir(){
        console.log('Subindo na arvore...')
    }
}