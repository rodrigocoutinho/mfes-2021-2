import Cachorro from "./Cachorro";
import Cavalo from "./Cavalo";
import Preguica from "./Preguica";

export default class Zoologico{
    #jaulas 

    constructor(animais){
        this.#jaulas = animais;
    }

    exibir(){
        this.#jaulas.forEach(function(item, indice, array){
            console.log(item, indice);
        })
    }
}
