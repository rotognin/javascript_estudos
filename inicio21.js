/**
 * Herança de classes
 */

class Veiculo {
    constructor(marca){
        this.marca = marca;
    }

    getMarca(){
        return this.marca;
    }
}

class Carro extends Veiculo {
    constructor(marca, cor){
        super(marca);
        this.cor = cor;
    }

    getCor(){
        return this.cor;
    }

    relatorio(){
        console.log(`
            --- Carro:
            ${this.getMarca()} - da cor ${this.getCor()}
            ---
        `);
    }

    static explicar(){
        console.log('Essa classe Carro é instanciada.');
    }

    // Essa função estática vai receber o objeto instanciado e executar
    // um método do mesmo.
    static explicarCor(obj){
        console.log(`--- ${obj.getMarca()}: a cor do carro passado é ${obj.getCor()}.`);
    }
}

const meuVW = new Carro('VW', 'Branco');
meuVW.relatorio();

const meuFiat = new Carro('Fiat', 'Azul');
meuFiat.relatorio();

Carro.explicar(); // Chamada estática para a classe

// Não pode, ocasiona erro, pois o método é estático e não pose ser chamado do objeto
// meuVW.explicar();

// Chamar um método estático passando o objeto a ser usado no mesmo
Carro.explicarCor(meuVW);
Carro.explicarCor(meuFiat);