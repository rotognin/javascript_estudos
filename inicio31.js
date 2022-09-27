/**
 * Generator - "pausando" a execução de funções e controlando elas
 */

const loop = function* () {
    let i = 0;
    while (true){
        console.log(i++);
        yield; // Esse comando é tipo o return, e pode ser usado para retornar algum valor
    }
}

const generator = loop();
generator.next();
generator.next();
generator.next();
generator.next();
generator.next();
generator.return(); // Finaliza a execução da função. Daqui pra frente não tem mais next

console.log(generator.next()); // vai retornar um objeto com o valor undefined e "done" como true

console.log("-----------------------------------");

function* arrays(texto = ''){
    let lista = [
        'avião', 'ajato', 'helicóptero', 'bicicleta'
    ];
    let index = 0;
    let total = lista.length;

    for (index = 0; index < total; index++){
        yield lista[index];
    }
}

const gerador = arrays();
let valor = gerador.next();

// Enquanto não terminar de retornar os valores, eu vou chamando next
while(!valor.done){
    console.log(valor.value);
    valor = gerador.next();
}

console.log("--- Agora acabou!");