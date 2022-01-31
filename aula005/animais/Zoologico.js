import Animal from "./Animal.js";
import Cachorro from "./Cachorro.js";
import Cavalo from "./Cavalo.js";
import Preguica from "./Preguica.js";

export default class Zoologico{
    #jaulas 

    constructor(animais){
        this.#jaulas = animais;
    }

    exibir(){
        this.#jaulas.forEach(function(item, indice, array){
            console.log(item, indice);
            item.agir();
        })
    }
}
