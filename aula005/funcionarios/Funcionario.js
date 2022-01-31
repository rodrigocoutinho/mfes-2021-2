export default class Funcionario{
    #nome;
    #codigo_funcional;
    #salario = 1000;

    constructor(nome, codigo){
        this.#nome = nome;
        this.#codigo_funcional = codigo;
    }

    set salario(valor){
        this.#salario = valor;
    }

    get salario(){
        return this.#salario;
    }
    calcSalario(){
        return this.#salario;
    }

}

class Basico extends Funcionario{
    #escola;

    constructor(escolab){
        super();
        this.#escola = escolab;
    }

    calcSalario(){
        return this.salario = salario + ((salario/100) * 10);
    }
}

class Medio extends Funcionario{
    #escola;

    constructor(escola){
        super();
        this.#escola = escola;
 
    }

    calcSalario(){
        return  this.salario = salario + ((salario/100) * 50);
    }
}

class Graduado extends Funcionario{
    #universidade;

    constructor(universidade){
        super();
        this.universidade = universidade;
        
    }
    calcSalario(){
        return  this.salario = salario * 2;
    }
}
const basico1 = new Basico('Municipal');
const basico2 = new Basico('Municipal');
const basico3 = new Basico('Municipal');
const basico4 = new Basico('Municipal');
const medio1 = new Medio("Estadual");
const medio2 = new Medio('Estadual');
const medio3 = new Medio('Estadual');
const medio4 = new Medio('Estadual');
const graduado1 = new Graduado('UFG');
const graduado2 = new Graduado('UFG');
const testEmpresa = [basico1, basico2, basico3, basico4, medio1, medio2, medio3, medio4, graduado1, graduado2];
const exibirempresa = testEmpresa.forEach(function (func, salario, array){
    console.log(func, salario)    
})

const total_basico = + testEmpresa.forEach(function(func, salario, array){
        func.calcSalario();
})
console.log(total_basico);
