export default class Animal{
    #nome
    #idade
    
    constructor(nome, idade){
        this.#nome = nome
        this.#idade = idade
    }

apresentar(){
    return `Nome: ${this.#nome} e Idade: ${this.#idade}`
}

    emitirSom(){
 
    }

    agir(){

    }
}