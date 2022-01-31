
export default class Veterinario{
    #animal

    constructor(animal){
        this.#animal = animal;
    }
    examinar(animal){
        animal.emitirSom()
    }
}