/**
 * Trabalhando com resolução de várias Promises
 */

function promessa1(numero){
    return new Promise((resolve, reject) => {
        const num1 = numero * 3;
        resolve(num1);
    });
}

function promessa2(numero){
    return new Promise((resolve, reject) => {
        const num2 = numero / 10;
        resolve(num2);
    });
}

function promessa3(numero){
    return new Promise((resolve, reject) => {
        const num3 = numero + 100;
        resolve(num3);
    });
}

// Chamar várias funções que retornam promessas e resolver todas de uma vez
Promise.all([
    promessa1(4),
    promessa2(5),
    promessa3(20),
    promessa1(2),
    promessa2(90),
    promessa3(1000)
]).then((retorno) => {
    // O retorno do Promise.all irá retornar um array com os retornos de cada função chamada
    console.log(retorno);
    const novoArray = retorno.map((valor, indice) => {
        console.log(`--- ${indice} ---`);
        if (valor > 10){
            console.log(`O valor ${valor} é maior que 10.`);
        } else {
            console.log(`Menor ou igual a 10: ${valor}`);
        }
        return valor / 1000;
    })
    console.log(novoArray);
});