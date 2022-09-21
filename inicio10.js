class Carro {
    constructor(marca, ano){
        this.marca = marca;
        this.ano = ano;
        this.km = 0;
        this.cor = undefined;
    }

    addKm(km){
        if (isNaN(km)){
            return false;
        }

        this.km += km;
        return true;
    }

    // Impressão das informações em forma de multilinha com
    // interpolação de variáveis.
    relatorio(){
        const dados = `
            Carro de marca ${this.marca},
            o ano do carro é ${this.ano},
            está com ${this.km} km's rodados,
            e é da cor ${this.cor}.
        `;
        return dados;
    }
}

let carro = new Carro('Gol', 2018);
console.log(carro);

if (carro.addKm(10)) {
    console.log("KM: " + carro.km);
} else {
    console.log("KM não adicionado");
}

carro.cor = 'Branco';

console.log(carro.relatorio());